// Have You Tried Turning It Off? — one funny line a hopeless tech
// support agent says to a desperate customer, under 200 characters.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt. In the
// grading sandbox MAKEFUN_OUTPUT_DIR is /output; locally it falls back
// to ./output so a run can be eyeballed.
//
// Verified by running it: the file lands whole, 97 characters, UTF-8,
// not only whitespace — inside the gate's 1–199 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I ask because that is the full extent of my training.";

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
writeLine(outDir ?? join(process.cwd(), "output"));

console.log(`Wrote ${LINE.length} characters to entry.txt`);
