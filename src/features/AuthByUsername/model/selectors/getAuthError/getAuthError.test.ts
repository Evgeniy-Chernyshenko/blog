import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getAuthError } from "./getAuthError";

describe("getAuthError", () => {
  test("Отдает ошибку", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      authByUsername: {
        error: "Some error",
      },
    };

    expect(getAuthError(state as StateSchema)).toBe("Some error");
  });

  test("Работает при пустом стейте", () => {
    expect(getAuthError({} as StateSchema)).toBe("");
  });
});
