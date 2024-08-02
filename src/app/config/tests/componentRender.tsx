import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import i18nForTests from "@/app/config/i18n/i18nForTests";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<Required<StateSchema>>>;
}

export const componentRender = (
  Component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={options.initialState}
        asyncReducers={options.asyncReducers}
      >
        <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
