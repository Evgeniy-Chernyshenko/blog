import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export const buildPlugins = (
  buildOptions: BuildOptions
): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: buildOptions.paths.htmlTemplate,
    }),
    new ProgressPlugin(),
  ];
};
