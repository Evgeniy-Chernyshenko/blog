import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    buildDir: "",
    htmlTemplate: "",
    entry: "",
    src: path.resolve(__dirname, "../../src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  config.module?.rules?.push(buildCssLoader(true), {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });
  Object.assign(config.resolve?.alias, { "@": paths.src });
  Object.assign(
    config.module?.rules,
    config.module?.rules?.map((rule) =>
      typeof rule === "object" && rule.type === "asset/resource"
        ? { ...rule, exclude: /\.svg$/i }
        : rule,
    ),
  );

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_BASE_URL__: JSON.stringify("http://localhost:8000"),
      __PROJECT__: JSON.stringify("storybook"),
    }),
  );

  return config;
};
