#!/usr/bin/env node
// Vercel deploy via REST API. Uploads files individually then creates a deployment.

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { createHash } from "node:crypto";

const TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_NAME = process.env.VERCEL_PROJECT_NAME || "yarden-shua";
const ROOT = process.argv[2] || ".";

if (!TOKEN) {
  console.error("VERCEL_TOKEN env var is required");
  process.exit(1);
}

const SKIP = new Set([
  "node_modules", ".next", ".git", ".vercel", ".turbo",
  ".DS_Store", "next-env.d.ts",
]);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

const files = [];
for (const f of walk(ROOT)) {
  const buf = readFileSync(f);
  const sha = createHash("sha1").update(buf).digest("hex");
  files.push({
    fullPath: f,
    file: relative(ROOT, f).split("\\").join("/"),
    sha,
    size: buf.length,
    buf,
  });
}

console.log(`Collected ${files.length} files (${files.reduce((a,b)=>a+b.size,0)} bytes)`);

// Step 1: upload each file
async function uploadFile(f, attempt = 1) {
  try {
    const res = await fetch("https://api.vercel.com/v2/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/octet-stream",
        "x-vercel-digest": f.sha,
        "Content-Length": String(f.size),
      },
      body: f.buf,
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`upload ${f.file} failed: ${res.status} ${t}`);
    }
  } catch (err) {
    if (attempt < 5) {
      await new Promise((r) => setTimeout(r, 500 * attempt));
      return uploadFile(f, attempt + 1);
    }
    throw err;
  }
}

console.log("Uploading files...");
for (let i = 0; i < files.length; i += 3) {
  await Promise.all(files.slice(i, i + 3).map((f) => uploadFile(f)));
  process.stdout.write(`  ${Math.min(i + 3, files.length)}/${files.length}\r`);
}
console.log("\nUploaded.");

// Step 2: create deployment
const deployBody = {
  name: PROJECT_NAME,
  files: files.map((f) => ({ file: f.file, sha: f.sha, size: f.size })),
  projectSettings: { framework: "nextjs" },
  target: "production",
};

const res = await fetch("https://api.vercel.com/v13/deployments", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(deployBody),
});
const json = await res.json();
if (!res.ok) {
  console.error("deploy failed:", JSON.stringify(json, null, 2));
  process.exit(1);
}

console.log("\nDeployment created:");
console.log("  id:    ", json.id);
console.log("  url:   ", "https://" + json.url);
console.log("  status:", json.readyState || json.status);
console.log("  inspect:", json.inspectorUrl);
