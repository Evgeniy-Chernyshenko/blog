type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  buildDir: string;
  htmlTemplate: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiBaseUrl: string;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
}
