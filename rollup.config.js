import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const IS_PROD = !process.env.ROLLUP_WATCH;

export default [
  {
    input: './src/background.ts',
    output: {
      name: 'background',
      file: './dist/background.js',
      format: 'umd'
    },
    plugins: [
      json(),
      typescript({
        clean: IS_PROD,
        cacheRoot: './.cache',
        tsconfigOverride: IS_PROD
          ? {
              exclude: ['./src/tests']
            }
          : undefined
      }),
      commonjs(),
      resolve(),
      IS_PROD && uglify()
    ]
  }
];
