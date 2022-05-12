const path = require("path");

module.exports = {
  entry: "./index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      name: "DynamicVirtualList",
      type: "umd",
      export: "default",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  externals: {
    "react-window": {
      commonjs: "react-window",
      commonjs2: "react-window",
      amd: "react-window",
      root: "react-window",
    },
  },
};
