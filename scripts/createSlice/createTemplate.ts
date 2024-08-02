import { createModel } from "./segments/createModel";
import { createPublicAPI } from "./segments/createPublicAPI";
import { createUI } from "./segments/createUI";

export const createTemplate = (
  layer: string,
  slice: string,
  sliceLower: string,
) => {
  const pathPrefix = `src/${layer}/${slice}`;

  createModel(pathPrefix, slice, sliceLower);
  createUI(pathPrefix, slice, sliceLower);
  createPublicAPI(pathPrefix, slice, sliceLower);
};
