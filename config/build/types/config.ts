type BuildMode = "development" | "production";

interface BuildPaths {
  entry: string;
  buildDir: string;
  htmlTemplate: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
}
