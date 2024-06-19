import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/profile";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string | ValidateProfileError[]>
>("api/updateProfileData", async (_, { extra, rejectWithValue, getState }) => {
  try {
    const profileFormData = getProfileFormData(getState());

    if (profileFormData) {
      const validationErrors = validateProfileData(profileFormData);

      if (validationErrors.length) {
        return rejectWithValue(validationErrors);
      }
    }

    const { data: profile } = await extra.api.put<Profile>(
      "/profile",
      profileFormData,
    );

    return profile;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
