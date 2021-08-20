import rollupCommon from './rollup.common';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const config = { ...rollupCommon };
// ----- OUTPUT -----
config.output = {
  ...config.output,
  format: 'iife',
  name: 'bundle',
  sourcemap: true,
};

config.watch = {
  clearScreen: false,
  skipWrite: false,
  include: 'src/**',
  // exclude: "node_modules/**",
};

// ----- PLUGINS -----
config.plugins = [
  ...config.plugins,

  // SASS
  scss({
    output: `${__dirname}/dist/bundle.css`,
    sourceMap: true,
    processor: () => postcss([postcssPresetEnv()]),
  }),

  // DEV SERVER
  serve({
    host: 'localhost',
    port: 10001,
    contentBase: `${__dirname}/dist`,
  }),

  // LIVE-RELOAD
  livereload(`${__dirname}/dist`),
];

export default config;
