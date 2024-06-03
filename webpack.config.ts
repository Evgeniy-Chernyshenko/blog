import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin } from "webpack";

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new ProgressPlugin(),
  ],
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
};

export default config;
