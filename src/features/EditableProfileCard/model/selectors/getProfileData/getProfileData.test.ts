import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("Отдает данные", () => {
    const profileData = {
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

    const state: DeepPartial<Required<StateSchema>> = {
      profile: { data: profileData },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test("Отдает undefined при пустом стейте", () => {
    expect(getProfileData({} as StateSchema)).toBe(undefined);
  });
});
