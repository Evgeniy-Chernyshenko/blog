import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("Отдает данные", () => {
    const errorText = "Some error";

    const state: DeepPartial<Required<StateSchema>> = {
      profile: { error: errorText },
    };

    expect(getProfileError(state as StateSchema)).toBe(errorText);
  });

  test("Отдает undefined при пустом стейте", () => {
    expect(getProfileError({} as StateSchema)).toBe(undefined);
  });
});
