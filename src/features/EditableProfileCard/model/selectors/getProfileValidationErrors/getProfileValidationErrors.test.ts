import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/profile";
import { getProfileValidationErrors } from "./getProfileValidationErrors";

describe("getProfileValidationErrors", () => {
  test("Отдает данные", () => {
    const profileValidationErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ];

    const state: DeepPartial<Required<StateSchema>> = {
      profile: {
        validationErrors: profileValidationErrors,
      },
    };

    expect(getProfileValidationErrors(state as StateSchema)).toEqual(
      profileValidationErrors,
    );
  });

  test("Отдает undefined при пустом стейте", () => {
    expect(getProfileValidationErrors({} as StateSchema)).toBe(undefined);
  });
});
