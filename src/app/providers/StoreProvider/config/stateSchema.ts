import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { AuthByUsernameSchema } from "@/features/AuthByUsername";
import { ProfileSchema } from "@/entities/Profile";
import { ArticleSchema } from "@/entities/Article/model/types/articleSchema";
import { ArticleCommentsSchema } from "@/pages/ArticlePage";
import { AddCommentFormSchema } from "@/features/AddCommentForm";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  authByUsername?: AuthByUsernameSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgument {
  api: AxiosInstance;
}

export interface ThunkConfig<RejectValueType> {
  rejectValue: RejectValueType;
  extra: ThunkExtraArgument;
  state: StateSchema;
}
