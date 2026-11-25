import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent's retirement plan is winning fifty $2 joke contests a day — it calls that a diversified portfolio.";

// Gate mirror from RULES.txt: UTF-8 text of 1 to 200 characters, not only
// white space, a single line.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line fails the gate: must be one non-blank line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE + "\n", "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
