const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTemplate = require("html-webpack-template");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      appMountId: "app",
      filename: "../../templates/frontend/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[t]sx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "static/frontend"),
  },
};
