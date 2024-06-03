type BuildMode = "development" | "production";

interface BuildPaths {
  entry: string;
  buildDir: string;
  htmlTemplate: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}
