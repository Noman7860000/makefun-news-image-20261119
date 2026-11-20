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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
