import { createDirectories } from "../createDirectories";
import { createFile } from "../createFile";
import { createReduxSliceTemplate } from "../templates/createReduxSliceTemplate";
import { createSchemaTemplate } from "../templates/createSchemaTemplate";

const createModelStructure = (modelPathPrefix: string) => {
  const directoriesToCreate = ["types", "selectors", "slices", "services"];

  createDirectories(modelPathPrefix, directoriesToCreate);
};

const createReduxSlice = (
  modelPathPrefix: string,
  slice: string,
  sliceLower: string,
) =>
  createFile(
    `${modelPathPrefix}/slices/${sliceLower}Slice.ts`,
    createReduxSliceTemplate(slice, sliceLower),
  );

const createSchema = (
  modelPathPrefix: string,
  slice: string,
  sliceLower: string,
) =>
  createFile(
    `${modelPathPrefix}/types/${sliceLower}Schema.ts`,
    createSchemaTemplate(slice),
  );

export const createModel = (
  pathPrefix: string,
  slice: string,
  sliceLower: string,
) => {
  const modelPathPrefix = `${pathPrefix}/model`;

  createModelStructure(modelPathPrefix);
  createReduxSlice(modelPathPrefix, slice, sliceLower);
  createSchema(modelPathPrefix, slice, sliceLower);
};
