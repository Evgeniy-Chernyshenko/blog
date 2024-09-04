import { ArticleType } from "@/entities/Article";
import { rtkApi } from "@/shared/api/rtkApi";

export const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<ArticleType[], number>({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsListQuery } =
  articleRecommendationsApi;
