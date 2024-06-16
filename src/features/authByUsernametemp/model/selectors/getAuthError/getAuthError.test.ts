import { StateSchema } from "@/app/providers/storeProvidertemp";
import { DeepPartial } from "@/shared/types/deepPartialtemp";
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
