import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    postcss(),
    nodeResolve({
      moduleDirectories: ['node_modules'],
      extensions: ['.js', '.jsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true
    }),
    babel({
      presets: ['@babel/preset-react']
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000
    }),
    livereload({ watch: 'dist' }),
    json(),
    image()
  ]
};
