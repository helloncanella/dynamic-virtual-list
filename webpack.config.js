const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "myNumbers.js",
    globalObject: "this",
    library: {
      name: "myNumbers",
      type: "umd",
      export: "default",
    },
  },

  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
