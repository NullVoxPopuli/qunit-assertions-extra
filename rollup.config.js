import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'lib/index.ts',

  external: ['qunit'],
  plugins: [
    typescript({
      exclude: ['node_modules/**/*'],
    }),
  ],

  output: {
    // name: require('./package.json').name,
    // format: 'umd',
    file: 'dist/index.js',
    // (amd, cjs, esm, iife, umd)
    format: 'cjs',
    sourcemap: true,
  },
};
