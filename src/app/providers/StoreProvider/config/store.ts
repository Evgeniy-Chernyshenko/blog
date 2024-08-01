import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/Counter";
import { StateSchema, ThunkExtraArgument } from "./stateSchema";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { apiInstance } from "@/shared/api/apiInstance";
import { pageWrapperReducer } from "@/widgets/PageWrapper";
import { rtkApi } from "@/shared/api/rtkApi";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    pageWrapper: pageWrapperReducer,
    ...asyncReducers,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const thunkExtraArgument: ThunkExtraArgument = { api: apiInstance };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: thunkExtraArgument },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
