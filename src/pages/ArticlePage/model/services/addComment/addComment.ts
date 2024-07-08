import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comments";
import { getArticleData } from "@/entities/Article";

export const addComment = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("api/addComment", async (text, { extra, rejectWithValue, getState }) => {
  try {
    const article = getArticleData(getState());
    const user = getUserAuthData(getState());

    if (!article?.id || !user?.id) {
      return rejectWithValue("No data");
    }

    const { data: comment } = await extra.api.post<Comment>("/comments", {
      text,
      articleId: article.id,
      userId: user.id,
    });

    return comment;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
