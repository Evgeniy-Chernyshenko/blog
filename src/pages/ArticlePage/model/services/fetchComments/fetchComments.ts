import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comments";

export const fetchComments = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>("api/fetchComments", async (articleId, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<Comment[]>("/comments", {
      params: { articleId, _expand: "user" },
    });

    return data;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
