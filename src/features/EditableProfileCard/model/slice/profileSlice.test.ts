import { DeepPartial } from "@reduxjs/toolkit";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileReducer, profileActions } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

describe("profileSlice", () => {
  const data = {
    id: "1",
    firstName: "Туалетный Джо",
    lastName: "Smiths",
    age: 42,
    city: "Moscow",
    username: "john",
    avatar:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718496000&semt=ais_user",
    country: Country.Belarus,
    currency: Currency.EUR,
  };

  test("Изменяется readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false)),
    ).toEqual({
      readonly: false,
    });
  });

  test("Отрабатывает cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "123" },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validationErrors: [],
      data,
      form: data,
    });
  });

  test("Отрабатывает setFormData", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: data,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setFormData({ username: "321" }),
      ),
    ).toEqual({
      data,
      form: { ...data, username: "321" },
    });
  });

  test("Корректно обрабатывается ожидание обновления профиля", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validationErrors: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validationErrors: [],
    });
  });

  test("Корректно обрабатывается успешное обновления профиля", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ""),
      ),
    ).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
    });
  });
});
