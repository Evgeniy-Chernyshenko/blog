import { StateSchema } from "@/app/providers/StoreProvider";
import { DeepPartial } from "@/shared/types/DeepPartial";
import { getAuthPassword } from "./getAuthPassword";

describe("getAuthPassword", () => {
  test("Отдает пароль", () => {
    const state: DeepPartial<Required<StateSchema>> = {
      authByUsername: {
        password: "Some password",
      },
    };

    expect(getAuthPassword(state as StateSchema)).toBe("Some password");
  });

  test("Работает при пустом стейте", () => {
    expect(getAuthPassword({} as StateSchema)).toBe("");
  });
});
