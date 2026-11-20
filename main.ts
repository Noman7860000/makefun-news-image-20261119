// Entry program for make.fun news-image-20261119:
// "Sum up 19 November's world news in one image".
//
// It copies the image bundled in this repository (entry.png) to the grader's
// output directory. Node 22, standard library only. No network, no randomness,
// no timestamps: every run writes the same bytes, so the two grading runs
// produce identical files.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify the copy is complete: the output must be byte-for-byte the source.
// Fail loudly instead of handing the grader a truncated file.
const srcSize = statSync(src).size;
const dstSize = statSync(dst).size;
if (srcSize !== dstSize) {
  throw new Error(`entry.png copy incomplete: ${dstSize} of ${srcSize} bytes written`);
}
