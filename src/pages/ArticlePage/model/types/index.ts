import { ArticleCommentsSchema } from "./articleCommentsSchema";
import { ArticleRecommendationsSchema } from "./ArticleRecommendationsSchema";

export interface ArticlePageSchema {
  comments: ArticleCommentsSchema;
  recommendations: ArticleRecommendationsSchema;
}
