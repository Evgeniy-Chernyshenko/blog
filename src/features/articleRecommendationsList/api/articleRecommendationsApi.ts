import { rtkApi } from "@/shared/api/rtkApi";

export const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit: number) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetArticleRecommendationsListQuery } =
  articleRecommendationsApi;
