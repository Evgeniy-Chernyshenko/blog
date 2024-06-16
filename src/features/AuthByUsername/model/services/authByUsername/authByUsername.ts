import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "@/entities/user";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";

interface AuthByUsernameArgs {
  username: string;
  password: string;
}

export const authByUsername = createAsyncThunk<
  User,
  AuthByUsernameArgs,
  { rejectValue: string }
>("api/authByUsername", async (data, thunkAPI) => {
  try {
    const { data: user } = await axios.post<User>(
      "http://localhost:8000/login",
      data,
    );

    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
    thunkAPI.dispatch(userActions.setAuthData(user));

    return user;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 403) {
      return thunkAPI.rejectWithValue("Неверный логин или пароль");
    }

    return thunkAPI.rejectWithValue("Что-то пошло не так");
  }
});
