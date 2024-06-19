import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode ?? "development";
  const port = env.port ?? 3000;
  const apiBaseUrl = env.apiBaseUrl ?? "http://localhost:8000";

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      buildDir: path.resolve(__dirname, "build"),
      htmlTemplate: path.resolve(__dirname, "public/index.html"),
      src: path.resolve(__dirname, "src"),
    },
    port,
    apiBaseUrl,
    project: "frontend",
  });
};
