import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface GetArticleRatingArgs {
  articleId: string;
  userId: string;
}

interface SetArticleRatingArgs {
  articleId: string;
  userId: string;
  rating: number;
  feedback?: string;
}

export const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArgs>({
      query: ({ articleId, userId }) => ({
        url: "/articles-rating",
        params: { articleId, userId },
      }),
    }),

    setArticleRating: build.mutation<Rating, SetArticleRatingArgs>({
      query: (args) => ({
        url: "/articles-rating",
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useSetArticleRatingMutation } =
  articleRatingApi;
