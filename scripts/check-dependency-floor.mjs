#!/usr/bin/env node
/**
 * Fail when next or sharp in this repo drop below the patched floors.
 *
 * next 16.4.1 — GHSA-2464-fhr4-w9xw / CVE-2026-96889 and GHSA-673q-mjm6-r5xr
 * next 15.5.28 — same SVG image-optimization advisory on the 15.x line
 * sharp 0.35.5 — GHSA-wq5f-xc86-pv6w (librsvg, CVE-2026-96889)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SHARP_FLOOR = [0, 35, 5];

const failures = [];

function parseVersion(raw) {
  const match = String(raw).trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/);
  if (!match) return null;
  return {
    parts: [Number(match[1]), Number(match[2]), Number(match[3])],
    prerelease: match[4] ?? "",
  };
}

function compare(a, b) {
  for (let i = 0; i < 3; i += 1) {
    if (a.parts[i] !== b.parts[i]) return a.parts[i] < b.parts[i] ? -1 : 1;
  }
  if (a.prerelease === b.prerelease) return 0;
  if (a.prerelease && !b.prerelease) return -1;
  if (!a.prerelease && b.prerelease) return 1;
  return a.prerelease < b.prerelease ? -1 : 1;
}

function below(version, floorParts) {
  const parsed = parseVersion(version);
  if (!parsed) return true;
  return compare(parsed, { parts: floorParts, prerelease: "" }) < 0;
}

function nextFloor(version) {
  const parsed = parseVersion(String(version).replace(/^[\^~>=\s]+/, ""));
  if (!parsed) return [16, 4, 1];
  if (parsed.parts[0] >= 16) return [16, 4, 1];
  return [15, 5, 28];
}

function minimumOfSpec(spec) {
  const value = String(spec).trim();
  const exact = value.match(/^v?(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)$/);
  if (exact) return exact[1];
  const ranged = value.match(/^(?:\^|~|>=)\s*v?(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)$/);
  if (ranged) return ranged[1];
  return null;
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".git" || name === ".next") continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, acc);
    else if (name === "package.json" || name === "package-lock.json") acc.push(path);
  }
  return acc;
}

function rel(path) {
  return path.startsWith(ROOT) ? path.slice(ROOT.length + 1) : path;
}

function isPackagePath(pkgPath, name) {
  return pkgPath === `node_modules/${name}` || pkgPath.endsWith(`/node_modules/${name}`);
}

function checkPackageJson(path, json) {
  const specs = [
    json.dependencies?.next,
    json.devDependencies?.next,
    json.optionalDependencies?.next,
  ].filter(Boolean);

  for (const spec of specs) {
    const minimum = minimumOfSpec(spec);
    if (!minimum) {
      failures.push(`${rel(path)}: cannot parse next spec "${spec}"`);
      continue;
    }
    const floor = nextFloor(minimum);
    if (below(minimum, floor)) {
      failures.push(
        `${rel(path)}: next ${spec} is below ${floor.join(".")} (GHSA-2464-fhr4-w9xw / GHSA-673q-mjm6-r5xr)`,
      );
    }
  }

  for (const field of ["dependencies", "devDependencies", "optionalDependencies"]) {
    const spec = json[field]?.sharp;
    if (!spec) continue;
    const minimum = minimumOfSpec(spec);
    if (!minimum || below(minimum, SHARP_FLOOR)) {
      failures.push(`${rel(path)}: sharp ${spec} is below 0.35.5 (GHSA-wq5f-xc86-pv6w)`);
    }
  }

  if (specs.length > 0) {
    const sharpOverride = json.overrides?.sharp;
    const minimum = sharpOverride ? minimumOfSpec(sharpOverride) : null;
    if (!minimum || below(minimum, SHARP_FLOOR)) {
      failures.push(
        `${rel(path)}: projects that depend on next must override sharp to >= 0.35.5`,
      );
    }
  }
}

function checkLock(path, json) {
  const packages = json.packages ?? {};
  let sawNext = false;
  let sawSharp = false;

  for (const [pkgPath, meta] of Object.entries(packages)) {
    if (!meta || typeof meta !== "object") continue;
    if (isPackagePath(pkgPath, "next")) {
      sawNext = true;
      const version = meta.version;
      const floor = nextFloor(version);
      if (!version || below(version, floor)) {
        failures.push(
          `${rel(path)}: ${pkgPath} resolved ${version ?? "unknown"} is below ${floor.join(".")}`,
        );
      }
    }
    if (isPackagePath(pkgPath, "sharp")) {
      sawSharp = true;
      if (!meta.version || below(meta.version, SHARP_FLOOR)) {
        failures.push(
          `${rel(path)}: ${pkgPath} resolved ${meta.version ?? "unknown"} is below 0.35.5`,
        );
      }
    }
  }

  const rootNext = packages[""]?.dependencies?.next || packages[""]?.devDependencies?.next;
  if (rootNext && !sawNext) {
    failures.push(`${rel(path)}: declares next but does not lock node_modules/next`);
  }
  if (sawNext && !sawSharp) {
    failures.push(`${rel(path)}: locks next without a sharp >= 0.35.5 entry`);
  }
}

const files = walk(ROOT);
if (files.length === 0) {
  console.error("No package.json or package-lock.json files found.");
  process.exit(1);
}

for (const path of files) {
  const json = JSON.parse(readFileSync(path, "utf8"));
  if (path.endsWith("package-lock.json")) checkLock(path, json);
  else checkPackageJson(path, json);
}

if (failures.length > 0) {
  console.error("Dependency floor check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Dependency floor check passed (${files.length} manifests).`);
console.log("next >= 16.4.1 (15.x >= 15.5.28) and sharp >= 0.35.5");
