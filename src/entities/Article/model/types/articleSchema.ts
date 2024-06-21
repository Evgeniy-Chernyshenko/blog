import { Article } from "./article";

export interface ArticleSchema {
  data?: Article;
  isLoading: boolean;
  error?: string;
}
