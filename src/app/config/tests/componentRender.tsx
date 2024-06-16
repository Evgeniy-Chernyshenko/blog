import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";
import i18nForTests from "@/app/config/i18n/i18nForTests";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  Component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = "/" } = options;

  return render(
    <StoreProvider initialState={options.initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
