import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

const getPageWrapperScroll = (state: StateSchema) => state.pageWrapper.scroll;

export const getPageWrapperScrollByPath = createSelector(
  getPageWrapperScroll,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0,
);
