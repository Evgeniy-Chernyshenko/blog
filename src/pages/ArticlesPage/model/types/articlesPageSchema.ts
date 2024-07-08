import { EntityState } from "@reduxjs/toolkit";
import {
  ArticleSortField,
  ArticleTag,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import { SortDirection } from "@/shared/types";

export interface ArticlesPageSchema extends EntityState<ArticleType> {
  isLoading: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  sortField: ArticleSortField;
  sortDirection: SortDirection;
  search: string;
  tag: ArticleTag;
  _inited: boolean;
}
