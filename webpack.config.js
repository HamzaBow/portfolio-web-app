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
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "index.html",
      template: "src/index.html",
    }),

    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "project-mathnote.html",
      template: "src/project-mathnote.html",
    }),

    new HtmlWebpackPlugin({
      title: "Web Pack",
      filename: "project-semantic-search.html",
      template: "src/project-semantic-search.html",
    }),
  ],
};