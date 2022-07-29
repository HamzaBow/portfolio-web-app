const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "index.html",
      template: "src/index.html",
    }),

    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "mathnote-project.html",
      template: "src/mathnote-project.html",
    }),

    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "project-semantic-search.html",
      template: "src/project-semantic-search.html",
    }),
  ],
};