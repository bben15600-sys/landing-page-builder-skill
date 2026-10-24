#!/usr/bin/env node
/**
 * Raise a freshly scaffolded app to the October 2026 patched floors.
 * Does not downgrade a newer already-patched next.
 */
import { readFileSync, writeFileSync } from "node:fs";

const path = "package.json";
const json = JSON.parse(readFileSync(path, "utf8"));

function parse(version) {
  const match = String(version).match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function below(version, floor) {
  const parts = parse(version);
  if (!parts) return true;
  for (let i = 0; i < 3; i += 1) {
    if (parts[i] !== floor[i]) return parts[i] < floor[i];
  }
  return false;
}

function ensureNext(field) {
  const spec = json[field]?.next;
  if (!spec) return;
  const parts = parse(spec);
  const floor = parts && parts[0] < 16 ? [15, 5, 28] : [16, 4, 1];
  if (below(spec, floor)) json[field].next = floor.join(".");
}

ensureNext("dependencies");
ensureNext("devDependencies");
if (json.devDependencies?.["eslint-config-next"]) {
  const spec = json.devDependencies["eslint-config-next"];
  const parts = parse(spec);
  const floor = parts && parts[0] < 16 ? [15, 5, 28] : [16, 4, 1];
  if (below(spec, floor)) json.devDependencies["eslint-config-next"] = floor.join(".");
}

json.overrides = {
  ...json.overrides,
  sharp: "0.35.5",
  "@sentry/nextjs": "10.75.2",
  "proxy-addr": "2.0.8",
  "body-parser": "2.4.0",
  postcss: "8.5.31",
  "brace-expansion@1": "1.1.21",
  "brace-expansion@5": "5.0.12",
  browserslist: "4.28.7",
  "js-yaml": "4.3.2",
  nanoid: "3.3.20",
  "source-map-js": "1.2.2",
  zod: "4.6.7",
};

writeFileSync(path, `${JSON.stringify(json, null, 2)}\n`);
console.log("Applied patched dependency floors to package.json");
