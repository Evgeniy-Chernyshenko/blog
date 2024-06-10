import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export const buildPlugins = (
  buildOptions: BuildOptions,
  isDev: boolean,
): WebpackPluginInstance[] => {
  const plugins = [
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

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
};
