import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleIsLoading,
  getArticleError,
  getArticleData,
} from "./articleSelectors";

describe("articleSelectors", () => {
  test("Отдает isLoading", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      article: { isLoading: false },
    };

    expect(getArticleIsLoading(state as StateSchema)).toBe(false);
  });

  test("Отдает undefined при пустом стейте isLoading", () => {
    expect(getArticleIsLoading({} as StateSchema)).toBe(undefined);
  });

  test("Отдает error", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      article: { error: "Some error" },
    };

    expect(getArticleError(state as StateSchema)).toBe("Some error");
  });

  test("Отдает undefined при пустом стейте error", () => {
    expect(getArticleError({} as StateSchema)).toBe(undefined);
  });

  test("Отдает статью", () => {
    const data = { id: "1", title: "Some title" };

    const state: DeepPartial<DeepRequired<StateSchema>> = {
      article: { data },
    };

    expect(getArticleData(state as StateSchema)).toEqual(data);
  });

  test("Отдает undefined при пустом стейте статьи", () => {
    expect(getArticleData({} as StateSchema)).toBe(undefined);
  });
});
