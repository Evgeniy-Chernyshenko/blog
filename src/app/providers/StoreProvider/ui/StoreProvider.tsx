import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReduxStore } from "..";
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
  const navigate = useNavigate();

  return (
    <Provider
      store={createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
      )}
    >
      {children}
    </Provider>
  );
};
