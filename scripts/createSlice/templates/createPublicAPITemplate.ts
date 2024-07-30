export const createPublicAPITemplate = (
  slice: string,
  sliceLower: string,
) => `export { ${slice}Schema } from "./model/types/${sliceLower}Schema";
export { ${slice} } from "./ui/${slice}/${slice}";
`;
