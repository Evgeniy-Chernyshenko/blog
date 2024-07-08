import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageWrapperSchema } from "../types/pageWrapperSchema";

const initialState: PageWrapperSchema = {
  scroll: {},
};

const pageWrapperSlice = createSlice({
  name: "pageWrapper",
  initialState,
  reducers: {
    setScrollPosition(
      state,
      action: PayloadAction<{ path: string; scrollTop: number }>,
    ) {
      state.scroll[action.payload.path] = action.payload.scrollTop;
    },
  },
});

export const { actions: pageWrapperActions, reducer: pageWrapperReducer } =
  pageWrapperSlice;
