import * as esbuild from 'esbuild';
import fs from 'node:fs/promises';

let packageJsonFile = await fs.readFile('./package.json');
let packageJson = JSON.parse(packageJsonFile);
let externals = [...Object.keys(packageJson.peerDependencies)];

await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: 'dist/esm/index.js',
  sourcemap: true,
  platform: 'browser',
  format: 'esm',
  external: externals,
});

await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: 'dist/cjs/index.js',
  sourcemap: true,
  platform: 'node',
  format: 'cjs',
  external: externals,
});
