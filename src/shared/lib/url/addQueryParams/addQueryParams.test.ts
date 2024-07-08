import { getQueryParams } from "./addQueryParams";

describe("getQueryParams", () => {
  test("Функция работает корректно с одним параметром", () => {
    const params = getQueryParams({ param1: "value1" });

    expect(params).toBe("?param1=value1");
  });

  test("Функция работает корректно с двумя параметрами", () => {
    const params = getQueryParams({ param1: "value1", a: "1" });

    expect(params).toBe("?param1=value1&a=1");
  });

  test("Функция работает корректно с параметром с undefined значением", () => {
    const params = getQueryParams({ param1: "value1", a: undefined });

    expect(params).toBe("?param1=value1");
  });

  test("Функция работает корректно только с параметром с undefined значением", () => {
    const params = getQueryParams({ a: undefined });

    expect(params).toBe("");
  });
});
