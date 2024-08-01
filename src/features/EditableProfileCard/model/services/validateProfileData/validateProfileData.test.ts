import { validateProfileData } from "./validateProfileData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../types/profile";

describe("validateProfileData", () => {
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

  test("Возвращается пустой массив (ошибок нет)", async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test("Возвращается массив с INCORRECT_USERNAME", async () => {
    const result = validateProfileData({ ...profileData, username: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test("Возвращается массив с INCORRECT_FIRSTNAME", async () => {
    const result = validateProfileData({
      ...profileData,
      firstName: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
  });

  test("Возвращается массив с INCORRECT_LASTNAME", async () => {
    const result = validateProfileData({
      ...profileData,
      lastName: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
  });

  test("Возвращается массив с INCORRECT_AGE", async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("Возвращается массив с INCORRECT_COUNTRY", async () => {
    const result = validateProfileData({
      ...profileData,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("Возвращается массив с INCORRECT_CITY", async () => {
    const result = validateProfileData({
      ...profileData,
      city: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("Возвращается массив с INCORRECT_AVATAR", async () => {
    const result = validateProfileData({
      ...profileData,
      avatar: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
  });

  test("Возвращается массив с INCORRECT_CURRENCY", async () => {
    const result = validateProfileData({
      ...profileData,
      currency: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
  });

  test("Возвращается массив со всеми ошибками", async () => {
    const result = validateProfileData({});

    expect(result.sort()).toEqual(
      [
        ValidateProfileError.INCORRECT_USERNAME,
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_CURRENCY,
        ValidateProfileError.INCORRECT_AVATAR,
      ].sort(),
    );
  });
});
