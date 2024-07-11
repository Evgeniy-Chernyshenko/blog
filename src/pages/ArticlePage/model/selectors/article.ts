import { createSelector } from "@reduxjs/toolkit";
import { getArticleData } from "@/entities/Article";
import { getUserAuthData } from "@/entities/User";

export const getCanEdit = createSelector(
  getUserAuthData,
  getArticleData,
  (userAuthData, articleData) =>
    userAuthData && userAuthData.id === articleData?.userId,
);
