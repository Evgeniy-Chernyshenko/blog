import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "@/entities/User";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { ThunkConfig } from "@/app/providers/StoreProvider";

interface AuthByUsernameArgs {
  username: string;
  password: string;
}

export const authByUsername = createAsyncThunk<
  User,
  AuthByUsernameArgs,
  ThunkConfig<string>
>("api/authByUsername", async (data, { dispatch, extra, rejectWithValue }) => {
  try {
    const { data: user } = await extra.api.post<User>("/login", data);

    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
    dispatch(userActions.setAuthData(user));

    return user;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 403) {
      return rejectWithValue("Неверный логин или пароль");
    }

    return rejectWithValue("Что-то пошло не так");
  }
});
