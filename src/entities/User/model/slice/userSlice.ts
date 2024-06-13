import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/user";

const initialState: UserSchema = { authData: null };

const userSlice = createSlice({ name: "user", reducers: {}, initialState });

export const { actions: userActions, reducer: userReducer } = userSlice;
