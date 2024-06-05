import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (
  buildOptions: BuildOptions,
  isDev: boolean
): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: buildOptions.paths.htmlTemplate,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
    new DefinePlugin({ __IS_DEV__: isDev }),
  ];
};
