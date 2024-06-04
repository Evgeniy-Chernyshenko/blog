import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  buildOptions: BuildOptions
): Configuration => {
  const isDev = buildOptions.mode === "development";

  return {
    mode: buildOptions.mode,
    entry: buildOptions.paths.entry,
    output: {
      filename: "bundle.[contenthash].js",
      path: buildOptions.paths.buildDir,
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    ...(isDev && {
      devtool: "inline-source-map",
      devServer: buildDevServer(buildOptions),
    }),
  };
};
