import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authByUsername } from "../../services/authByUsername/authByUsername";
import { AuthByUsernameSchema } from "../types/authByUsernameSchema";

const initialState: AuthByUsernameSchema = {
  username: "",
  password: "",
  isLoading: false,
};

const authByUsernameSlice = createSlice({
  name: "authByUsername",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },

    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });

    builder.addCase(authByUsername.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(authByUsername.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  actions: authByUsernameActions,
  reducer: authByUsernameReducer,
} = authByUsernameSlice;
