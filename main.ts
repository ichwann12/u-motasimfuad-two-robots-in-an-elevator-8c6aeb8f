// Two Robots in an Elevator — make.fun entry (one line, two robots, one lift)
// Reads the entry line from entry.txt (repo root) and writes it to the
// output directory given by MAKEFUN_OUTPUT_DIR (or MAKEFUN_BOT_DIR).
// Node 22, stdlib only. No network, no wall clock, no randomness.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(root, "entry.txt"), "utf8").trimEnd();

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "output.txt"), entry + "\n", "utf8");
console.log(entry);
