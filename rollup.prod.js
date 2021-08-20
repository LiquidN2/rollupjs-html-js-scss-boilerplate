import rollupCommon from './rollup.common';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';

const config = { ...rollupCommon };

// ----- OUTPUT -----
config.output = {
  ...config.output,
  file: `${__dirname}/dist/bundle.js`,
  format: 'iife',
  name: 'bundle',
  plugins: [terser()], // minify JS
};

// ----- PLUGINS -----
config.plugins = [
  ...config.plugins,
  scss({
    output: `${__dirname}/dist/bundle.css`,
    outputStyle: 'compressed',
    processor: () => postcss([postcssPresetEnv()]),
  }),
];

export default config;
