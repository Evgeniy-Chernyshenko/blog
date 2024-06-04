import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (buildOptions: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // preferAbsolute: true,
    // modules: [buildOptions.paths.src, "node_modules"],
    alias: { "@": buildOptions.paths.src },
  };
};
