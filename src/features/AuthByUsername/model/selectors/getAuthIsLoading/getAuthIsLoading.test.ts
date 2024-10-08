import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getAuthIsLoading } from "./getAuthIsLoading";

describe("getAuthIsLoading", () => {
  test("Отдает состояние загрузки", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      authByUsername: {
        isLoading: true,
      },
    };

    expect(getAuthIsLoading(state as StateSchema)).toBe(true);
  });

  test("Работает при пустом стейте", () => {
    expect(getAuthIsLoading({} as StateSchema)).toBe(false);
  });
});
