import path from "path";
import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions } from "./src/config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;

  const buildOptions: BuildOptions = {
    mode,
    paths: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      buildDir: path.resolve(__dirname, "build"),
      htmlTemplate: path.resolve(__dirname, "public/index.html"),
    },
    port,
  };

  return buildWebpackConfig(buildOptions);
};
