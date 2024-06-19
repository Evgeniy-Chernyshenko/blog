import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("Отдает данные", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      profile: { isLoading: true },
    };

    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });

  test("Отдает false при пустом стейте", () => {
    expect(getProfileIsLoading({} as StateSchema)).toBe(false);
  });
});
