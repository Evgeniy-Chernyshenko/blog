import { RuleSetRule } from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const babelCodeLoader = buildBabelLoader({ isDev, isTsx: false });
  const babelTsxLoader = buildBabelLoader({ isDev, isTsx: true });

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };

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

  return [
    babelCodeLoader,
    babelTsxLoader,
    /* typescriptLoader, */ cssLoader,
    fileLoader,
    svgLoader,
  ];
};
