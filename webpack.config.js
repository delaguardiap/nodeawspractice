const path = require("path");

module.exports = {
  entry: ["./app.js", "./client/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
};
