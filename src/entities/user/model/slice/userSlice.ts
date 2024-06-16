import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = { authData: null };

const userSlice = createSlice({
  name: "user",
  reducers: {
    setAuthData(state, action: PayloadAction<User | null>) {
      state.authData = action.payload;
    },
  },
  initialState,
});

export const { actions: userActions, reducer: userReducer } = userSlice;
