import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../..";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: undefined,
  readonly: true,
};

const ProfileSlice = createSlice({
  name: "profile",
  reducers: {
    setProfileData(state, action: PayloadAction<Profile | null>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });

    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
  initialState,
});

export const { actions: profileActions, reducer: profileReducer } =
  ProfileSlice;
