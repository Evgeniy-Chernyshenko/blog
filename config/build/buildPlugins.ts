import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
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
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_BASE_URL__: JSON.stringify(buildOptions.apiBaseUrl),
      __PROJECT__: JSON.stringify(buildOptions.project),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: buildOptions.paths.locales,
          to: buildOptions.paths.buildLocales,
        },
      ],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ];

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerPort: "auto" }),
    );

    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
  }

  return plugins;
};
