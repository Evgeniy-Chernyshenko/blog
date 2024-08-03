import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/stateSchema";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<Required<StateSchema>>>;
  children: ReactNode;
}

export const StoreProvider = ({
  initialState,
  asyncReducers,
  children,
}: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
