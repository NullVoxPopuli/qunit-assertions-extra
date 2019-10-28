import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'lib/index.ts',

  external: ['qunit'],
  plugins: [
    typescript({
      exclude: ['node_modules/**'],
    }),
  ],

  output: {
    file: 'dist/qunit-assertions-extra.js',
    format: 'iife',
    sourcemap: true,
  },
};
