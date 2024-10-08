import { authByUsername } from "./authByUsername";
import { userActions } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/tests/testAsyncThunk";

// describe("authByUsername", () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test("Возвращаются корректные данные", async () => {
//     const mockedReturnValue = { id: "1", username: "John" };
//     mockedAxios.post.mockResolvedValue({ data: mockedReturnValue });

//     const action = authByUsername({ username: "John", password: "password" });
//     const result = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("fulfilled");
//     expect(dispatch).toHaveBeenCalledWith(
//       userActions.setAuthData(mockedReturnValue),
//     );
//     expect(result.payload).toEqual(mockedReturnValue);
//     expect(dispatch).toHaveBeenCalledTimes(3);
//   });

//   test("Возвращаются ошибка при 403 ответе в виде строки", async () => {
//     mockedAxios.post.mockRejectedValue({ response: { status: 403 } });

//     const action = authByUsername({ username: "John", password: "password" });
//     const result = await action(dispatch, getState, undefined);

//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("rejected");
//     expect(typeof result.payload).toBe("string");
//     expect(dispatch).toHaveBeenCalledTimes(2);
//   });
// });

describe("authByUsername", () => {
  test("Возвращаются корректные данные", async () => {
    const thunk = new TestAsyncThunk(authByUsername);

    const mockedReturnValue = { id: "1", username: "John", roles: [] };
    thunk.mockedApi.post.mockResolvedValue({ data: mockedReturnValue });

    const result = await thunk.call({ username: "John", password: "password" });

    expect(thunk.mockedApi.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(mockedReturnValue),
    );
    expect(result.payload).toEqual(mockedReturnValue);
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test("Возвращаются ошибка при 403 ответе в виде строки", async () => {
    const thunk = new TestAsyncThunk(authByUsername);

    thunk.mockedApi.post.mockRejectedValue({ response: { status: 403 } });

    const result = await thunk.call({ username: "John", password: "password" });

    expect(thunk.mockedApi.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(typeof result.payload).toBe("string");
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
