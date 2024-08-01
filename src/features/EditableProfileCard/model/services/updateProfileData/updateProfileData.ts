import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/profile";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { Profile } from "@/entities/Profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string | ValidateProfileError[]>
>("api/updateProfileData", async (_, { extra, rejectWithValue, getState }) => {
  try {
    const profileFormData = getProfileFormData(getState());

    if (!profileFormData) {
      throw new Error();
    }

    const validationErrors = validateProfileData(profileFormData);

    if (validationErrors.length) {
      return rejectWithValue(validationErrors);
    }

    const { data: profile } = await extra.api.put<Profile>(
      `/profiles/${profileFormData.id}`,
      profileFormData,
    );

    return profile;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
