import { createTemplate } from "./createTemplate";
import { toLowerCaseFirstLetter } from "./toLowerCaseFirstLetter";
import { toUpperCaseFirstLetter } from "./toUpperCaseFirstLetter";

(async () => {
  try {
    const allowedLayers = ["features", "pages", "entities"];

    const [, , layer, rawSlice] = process.argv;

    if (!layer || !rawSlice) {
      console.error(
        "Укажите layer и slice.\nПример: npm run generate features NewFeature",
      );

      return;
    }

    if (!allowedLayers.includes(layer)) {
      console.error(`Допустимые слои: ${allowedLayers.join(", ")}.`);

      return;
    }

    const slice = toUpperCaseFirstLetter(rawSlice);
    const sliceLower = toLowerCaseFirstLetter(rawSlice);

    createTemplate(layer, slice, sliceLower);
  } catch (error) {
    console.error(
      `Произошла ошибка: ${error instanceof Error ? error.message : "что-то пошло не так"}.`,
    );
  }
})();
