import { fetchNextPageArticles } from "./fetchNextPageArticles";
import { TestAsyncThunk } from "@/shared/tests/testAsyncThunk";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("fetchNextPageArticles", () => {
  test("Страница меняется, fetchArticles вызывается", async () => {
    const thunk = new TestAsyncThunk(fetchNextPageArticles, {
      articlesPage: {
        entities: {},
        ids: [],
        page: 1,
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.call();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 2 });
  });

  test("Страница не меняется, fetchArticles не вызывается", async () => {
    const thunk = new TestAsyncThunk(fetchNextPageArticles, {
      articlesPage: {
        entities: {},
        ids: [],
        page: 1,
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.call();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
