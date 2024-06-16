import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { counterReducer } from "@/entities/Counter";
import { StateSchema } from "./stateSchema";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { apiInstance } from "@/shared/api/apiInstance";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { api: apiInstance, navigate } },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
