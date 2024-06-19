import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "@/shared/tests/testAsyncThunk";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

describe("fetchProfileData", () => {
  test("Возвращаются корректные данные", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    const mockedReturnValue = {
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
    thunk.mockedApi.get.mockResolvedValue({ data: mockedReturnValue });

    const result = await thunk.call();

    expect(thunk.mockedApi.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(mockedReturnValue);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test("Возвращаются ошибка при 403 ответе в виде строки", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.mockedApi.get.mockRejectedValue({ response: { status: 403 } });

    const result = await thunk.call();

    expect(thunk.mockedApi.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(typeof result.payload).toBe("string");
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
