import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("api/updateProfileData", async (_, { extra, rejectWithValue, getState }) => {
  try {
    const profileFormData = getProfileFormData(getState());

    const { data: profile } = await extra.api.put<Profile>(
      "/profile",
      profileFormData,
    );

    return profile;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
