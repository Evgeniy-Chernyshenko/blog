import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../..";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validationErrors: [],
};

const ProfileSlice = createSlice({
  name: "profile",
  reducers: {
    setFormData(state, action: PayloadAction<Profile>) {
      state.form = { ...state.form, ...action.payload };
    },

    cancelEdit(state) {
      state.form = state.data;
      state.readonly = true;
      state.validationErrors = [];
    },

    setReadonly(state, action: PayloadAction<boolean>) {
      state.readonly = action.payload;
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
      state.form = action.payload;
    });

    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.validationErrors = [];
      state.isLoading = true;
    });

    builder.addCase(updateProfileData.rejected, (state, action) => {
      if (action.payload instanceof Array) {
        state.validationErrors = action.payload;
      } else {
        state.error = action.payload;
      }

      state.isLoading = false;
    });

    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readonly = true;
    });
  },
  initialState,
});

export const { actions: profileActions, reducer: profileReducer } =
  ProfileSlice;
