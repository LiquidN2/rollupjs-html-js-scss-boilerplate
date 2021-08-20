import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  // ----- INPUT -----
  input: `${__dirname}/src/js/main.js`,

  // ----- OUTPUT -----
  output: {
    file: `${__dirname}/dist/bundle.js`,
    globals: {},
  },

  // ----- PLUGINS -----
  plugins: [resolve(), commonjs(), babel({ babelHelpers: "bundled" })],
};
