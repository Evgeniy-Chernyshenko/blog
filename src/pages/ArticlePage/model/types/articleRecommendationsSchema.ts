import { EntityState } from "@reduxjs/toolkit";
import { ArticleType } from "@/entities/Article";

export interface ArticleRecommendationsSchema extends EntityState<ArticleType> {
  isLoading?: boolean;
  error?: string;
}
