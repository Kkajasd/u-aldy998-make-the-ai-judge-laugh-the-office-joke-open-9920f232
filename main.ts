import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the printer that never finishes warming up.
// Deterministic: the same line on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
const LINE =
  "Our office printer has been 'warming up' since March, so we stopped waiting and listed it on the org chart as Senior Manager of Delay.";

// The bounty wants one single line: fail loudly here rather than ship an
// empty or multi-line entry that the gate would refuse.
if (LINE.length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
