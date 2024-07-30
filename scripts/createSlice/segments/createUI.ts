import { createDirectories } from "../createDirectories";
import { createFile } from "../createFile";
import { createUIComponentStylesTemplate } from "../templates/createUIComponentStylesTemplate";
import { createUIComponentTemplate } from "../templates/createUIComponentTemplate";

const createUIStructure = (UIPathPrefix: string, slice: string) => {
  const directoriesToCreate = [slice];

  createDirectories(UIPathPrefix, directoriesToCreate);
};

const createUIComponent = (
  UIPathPrefix: string,
  slice: string,
  sliceLower: string,
) =>
  createFile(
    `${UIPathPrefix}/${slice}/${slice}.tsx`,
    createUIComponentTemplate(slice, sliceLower),
  );

const createUIComponentStyles = (
  UIPathPrefix: string,
  slice: string,
  sliceLower: string,
) =>
  createFile(
    `${UIPathPrefix}/${slice}/${slice}.module.scss`,
    createUIComponentStylesTemplate(sliceLower),
  );

export const createUI = (
  pathPrefix: string,
  slice: string,
  sliceLower: string,
) => {
  const UIPathPrefix = `${pathPrefix}/ui`;

  createUIStructure(UIPathPrefix, slice);
  createUIComponent(UIPathPrefix, slice, sliceLower);
  createUIComponentStyles(UIPathPrefix, slice, sliceLower);
};
