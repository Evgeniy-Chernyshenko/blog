import { writeFileSync } from "fs";

export const createFile = (filePath: string, fileData: string) =>
  writeFileSync(filePath, fileData);
