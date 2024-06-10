import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "@/app/config/i18n/i18nForTests";

interface ComponentRenderOptions {
  route?: string;
}

export const componentRender = (
  Component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
    </MemoryRouter>,
  );
};
