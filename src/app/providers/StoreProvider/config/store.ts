import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/counter";
import { StateSchema } from "./stateSchema";
import { userReducer } from "@/entities/user";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
