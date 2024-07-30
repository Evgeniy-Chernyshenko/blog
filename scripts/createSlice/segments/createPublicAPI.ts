import { createFile } from "../createFile";
import { createPublicAPITemplate } from "../templates/createPublicAPITemplate";

export const createPublicAPI = (
  pathPrefix: string,
  slice: string,
  sliceLower: string,
) => {
  createFile(
    `${pathPrefix}/index.ts`,
    createPublicAPITemplate(slice, sliceLower),
  );
};
