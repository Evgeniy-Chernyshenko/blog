import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const babelLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [isDev && require.resolve("react-refresh/babel")].filter(
          Boolean,
        ),
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  return [babelLoader, typescriptLoader, cssLoader, fileLoader, svgLoader];
};
