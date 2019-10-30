import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

let extensions = ['.js', '.ts'];

export default {
  input: 'lib/index.ts',

  external: ['qunit'],
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      include: ['lib/**/*'],
      exclude: ['node_modules/**/*'],
    }),
  ],

  output: {
    name: require('./package.json').name,
    format: 'umd',
    file: 'dist/index.js',
    // (amd, cjs, esm, iife, umd)
    // format: 'cjs',
    sourcemap: true,
  },
};
