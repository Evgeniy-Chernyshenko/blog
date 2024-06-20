import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (
  buildOptions: BuildOptions,
  isDev: boolean,
): DevServerConfiguration => ({
  port: buildOptions.port,
  open: true,
  historyApiFallback: true,
  hot: isDev,
});
