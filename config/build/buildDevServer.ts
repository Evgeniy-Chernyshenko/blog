import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (
  buildOptions: BuildOptions,
): DevServerConfiguration => ({
  port: buildOptions.port,
  open: true,
  historyApiFallback: true,
});
