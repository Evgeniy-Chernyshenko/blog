import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = { authData: null, _isInit: false };

const userSlice = createSlice({
  name: "user",
  reducers: {
    setAuthData(state, action: PayloadAction<User | null>) {
      state.authData = action.payload;
    },

    setIsInit(state) {
      state._isInit = true;
    },
  },
  initialState,
});

export const { actions: userActions, reducer: userReducer } = userSlice;
