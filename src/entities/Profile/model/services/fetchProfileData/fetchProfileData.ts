import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { profileActions } from "../../slice/profileSlice";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("api/fetchProfileData", async (_, { dispatch, extra, rejectWithValue }) => {
  try {
    const { data: profile } = await extra.api.get<Profile>("/profile");

    dispatch(profileActions.setProfileData(profile));

    return profile;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
