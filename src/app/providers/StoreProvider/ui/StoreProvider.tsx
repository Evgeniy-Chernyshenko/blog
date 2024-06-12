import { DeepPartial } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "..";
import { StateSchema } from "../config/stateSchema";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  children: ReactNode;
}

export const StoreProvider = ({
  initialState,
  children,
}: StoreProviderProps) => {
  return (
    <Provider store={createReduxStore(initialState as StateSchema)}>
      {children}
    </Provider>
  );
};
