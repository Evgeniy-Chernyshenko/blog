import { mkdirSync } from "fs";

export const createDirectories = (
  pathPrefix: string,
  directories: string[],
) => {
  directories.forEach((directory) =>
    mkdirSync(`${pathPrefix}/${directory}`, { recursive: true }),
  );
};
