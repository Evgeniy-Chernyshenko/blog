import { ArticleType } from "./article";

export interface ArticleSchema {
  data?: ArticleType;
  isLoading: boolean;
  error?: string;
}
