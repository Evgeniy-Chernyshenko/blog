import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import {
  ArticleSortField,
  ArticleTag,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";
import { mapArticleViewToLimit } from "../constants/mapArticleViewToLimit";
import { SortDirection } from "@/shared/types/sort";

const articlesPageAdapter = createEntityAdapter<ArticleType>({
  selectId: (article) => article.id,
});

const initialState = articlesPageAdapter.getInitialState<ArticlesPageSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  view: "grid",
  limit: mapArticleViewToLimit.grid,
  page: 1,
  hasMore: true,
  sortField: ArticleSortField.CREATED_AT,
  sortDirection: "desc",
  search: "",
  tag: "all",
  _inited: false,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? initialState,
);

const articlesPageSlice = createSlice({
  name: "articlesPage",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },

    initState: (state, action: PayloadAction<Partial<ArticlesPageSchema>>) => {
      Object.assign(state, action.payload);
      state.limit = mapArticleViewToLimit[state.view];
      state._inited = true;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setSortField: (state, action: PayloadAction<ArticleSortField>) => {
      state.sortField = action.payload;
    },

    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setTag: (state, action: PayloadAction<ArticleTag>) => {
      state.tag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;

      if (action.meta.arg?.replace) {
        articlesPageAdapter.removeAll(state);
      }
    });

    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;

      if (action.meta.arg?.replace) {
        articlesPageAdapter.setAll(state, action.payload);
      } else {
        articlesPageAdapter.addMany(state, action.payload);
      }

      state.hasMore = action.payload.length >= state.limit;
    });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
