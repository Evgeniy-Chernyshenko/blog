import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getAuthUsername } from "./getAuthUsername";

describe("getAuthUsername", () => {
  test("Отдает username", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      authByUsername: {
        username: "Some username",
      },
    };

    expect(getAuthUsername(state as StateSchema)).toBe("Some username");
  });

  test("Работает при пустом стейте", () => {
    expect(getAuthUsername({} as StateSchema)).toBe("");
  });
});
