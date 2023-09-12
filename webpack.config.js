const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new MiniCssExtractPlugin({filename: 'styles.css'})
  ],
  devServer: {
    port: 4444,
    open: true,
  },
  stats: 'errors-only',
};