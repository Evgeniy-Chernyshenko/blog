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
import { AddCommentFormSchema } from "@/features/AddCommentForm";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { PageWrapperSchema } from "@/widgets/PageWrapper";
import { ArticlePageSchema } from "@/pages/ArticlePage";
import { rtkApi } from "@/shared/api/rtkApi";
import { ArticleSchema } from "@/entities/Article";
import { ProfileSchema } from "@/features/EditableProfileCard";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  pageWrapper: PageWrapperSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  authByUsername?: AuthByUsernameSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articlePage?: ArticlePageSchema;
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
