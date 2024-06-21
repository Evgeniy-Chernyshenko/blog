import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from "@/app/providers/StoreProvider";

export type ReducersList = Partial<ReducersMapObject<Required<StateSchema>>>;

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactElement;
  notRemoveOnUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  children,
  notRemoveOnUnmount = false,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const state = store.getState();

    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      const key = reducerName as StateSchemaKey;

      if (!state[key]) {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
      }
    });

    return () => {
      if (notRemoveOnUnmount) {
        return;
      }

      Object.entries(reducers).forEach(([reducerName]) => {
        const key = reducerName as StateSchemaKey;

        store.reducerManager.remove(key);
        dispatch({ type: `@DESTROY ${key} reducer` });
      });
    };
  }, [dispatch, notRemoveOnUnmount, reducers, store]);

  return children;
};
