import { DeepPartial } from "@reduxjs/toolkit";
import { authByUsername } from "../services/authByUsername/authByUsername";
import { AuthByUsernameSchema } from "../types/authByUsernameSchema";
import {
  authByUsernameReducer,
  authByUsernameActions,
} from "./authByUsernameSlice";

describe("authByUsernameSlice", () => {
  test("Изменяется username", () => {
    const state: DeepPartial<AuthByUsernameSchema> = { username: "John" };

    expect(
      authByUsernameReducer(
        state as AuthByUsernameSchema,
        authByUsernameActions.setUsername("John Doe"),
      ),
    ).toEqual({ username: "John Doe" });
  });

  test("Изменяется password", () => {
    const state: DeepPartial<AuthByUsernameSchema> = { password: "123" };

    expect(
      authByUsernameReducer(
        state as AuthByUsernameSchema,
        authByUsernameActions.setPassword("12345"),
      ),
    ).toEqual({ password: "12345" });
  });

  test("Изменяется isLoading", () => {
    const stateLoadingFalse: DeepPartial<AuthByUsernameSchema> = {
      isLoading: false,
    };
    const stateLoadingTrue: DeepPartial<AuthByUsernameSchema> = {
      isLoading: true,
    };

    expect(
      authByUsernameReducer(
        stateLoadingFalse as AuthByUsernameSchema,
        authByUsername.pending,
      ),
    ).toEqual({ isLoading: true });

    expect(
      authByUsernameReducer(
        stateLoadingTrue as AuthByUsernameSchema,
        authByUsername.rejected,
      ),
    ).toEqual({ isLoading: false });

    expect(
      authByUsernameReducer(
        stateLoadingTrue as AuthByUsernameSchema,
        authByUsername.fulfilled,
      ),
    ).toEqual({ isLoading: false });
  });
});
