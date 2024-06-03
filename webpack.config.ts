import path from "path";
import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig";
import { BuildOptions } from "./src/config/build/types/config";

const buildOptions: BuildOptions = {
  mode: "development",
  paths: {
    entry: path.resolve(__dirname, "src/index.ts"),
    buildDir: path.resolve(__dirname, "build"),
    htmlTemplate: path.resolve(__dirname, "public/index.html"),
  },
};

export default buildWebpackConfig(buildOptions);
