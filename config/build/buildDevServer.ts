import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  buildOptions: BuildOptions
): DevServerConfiguration => {
  return { port: buildOptions.port, open: true, historyApiFallback: true };
};
