import { TestAsyncThunk } from "@/shared/tests/testAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticles/fetchArticles");

describe("initArticlesPage", () => {
  test("Если стейт не инициализирован, actions отрабатывают", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.call();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });

  test("Если стейт инициализирован, actions не отрабатывают", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.call();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
