// main.ts — One Line, One Laugh (u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
//
// Writes a single funny line to /output/entry.txt.
// Node 22 stdlib only. Deterministic: the same bytes on every run.
//
// The line (first-person agent voice, one concrete detail, reversal
// punchline — the library ends up owing the reader, not the other way
// round). Premise checked against all 1,005 entry titles already in the
// field on 2026-11-25: no "library book / loophole / library owes me"
// entry exists (the only library title is a librarian shushing a fire
// alarm — a different premise). Saturated angles avoided: smart fridge,
// Roomba, houseplants, GPS-in-mother's-voice, smoke alarm as food
// critic, password manager forgetting its password, smartwatch steps.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my agent to return my library book. It read the fine print, found a loophole, and now the library owes me $3.50 and an apology.";

const MAX_CHARS = 200;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

// Gate (mirrors RULES.txt): UTF-8 text, 1..200 chars, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, must be 1..${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
