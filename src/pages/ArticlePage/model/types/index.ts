import { ArticleCommentsSchema } from "./articleCommentsSchema";
import { ArticleRecommendationsSchema } from "./articleRecommendationsSchema";

export interface ArticlePageSchema {
  comments: ArticleCommentsSchema;
  recommendations: ArticleRecommendationsSchema;
}
