import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>("api/fetchProfileData", async (userId, { extra, rejectWithValue }) => {
  try {
    const { data: profile } = await extra.api.get<Profile>(
      `/profiles/${userId}`,
    );

    return profile;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
