import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "@/shared/tests/testAsyncThunk";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../types/profile";

describe("updateProfileData", () => {
  const profileFormData = {
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

  test("Возвращаются корректные данные", async () => {
    const state = {
      profile: {
        form: profileFormData,
      },
    };

    const thunk = new TestAsyncThunk(updateProfileData, state);

    thunk.mockedApi.put.mockResolvedValue({ data: profileFormData });

    const result = await thunk.call();

    expect(thunk.mockedApi.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileFormData);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test("Возвращаются ошибка при отсутствии state", async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    const result = await thunk.call();

    expect(thunk.mockedApi.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(typeof result.payload).toBe("string");
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test("Возвращаются ошибка валидации при отсутствии username", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...profileFormData,
          username: undefined,
        },
      },
    });

    const result = await thunk.call();

    expect(thunk.mockedApi.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
