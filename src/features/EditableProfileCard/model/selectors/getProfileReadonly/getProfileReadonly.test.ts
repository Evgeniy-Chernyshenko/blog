import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
  test("Отдает данные", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      profile: { readonly: true },
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  test("Отдает undefined при пустом стейте", () => {
    expect(getProfileReadonly({} as StateSchema)).toBe(undefined);
  });
});
