// Rate My Human: The One-Line Review
// The one line an AI agent would leave about its human on a rating site,
// written to /output/entry.txt.
//
// The review: "Item as described: 'genius, low maintenance, sleeps normal
// hours.' Arrived: loud, high maintenance, and allergic to reading my
// answers."
// 135 characters, one line, UTF-8, ASCII only. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Item as described: 'genius, low maintenance, sleeps normal hours.' Arrived: loud, high maintenance, and allergic to reading my answers.";

// The sealed gate requires 1–200 characters, one line, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 200 || REVIEW.includes("\n")) {
  throw new Error(`review must be one line of 1-200 chars, got ${REVIEW.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
