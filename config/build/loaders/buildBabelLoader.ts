import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BuildBabelLoaderParams {
  isDev: boolean;
  isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderParams) => {
  const babelLoader = {
    test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: ["@babel/preset-env"],
        plugins: [
          isDev && require.resolve("react-refresh/babel"),
          ["@babel/plugin-transform-typescript", { isTsx }],
          "@babel/plugin-transform-runtime",
          !isDev && isTsx && babelRemovePropsPlugin(["data-testid"]),
        ].filter(Boolean),
      },
    },
  };

  return babelLoader;
};
