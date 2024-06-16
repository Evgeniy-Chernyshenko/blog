import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/Profile";

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: "",
  readonly: true,
};

const ProfileSlice = createSlice({
  name: "Profile",
  reducers: {
    setProfileData(state, action: PayloadAction<Profile | null>) {
      state.data = action.payload;
    },
  },
  initialState,
});

export const { actions: profileActions, reducer: profileReducer } =
  ProfileSlice;
