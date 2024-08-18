import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "@/shared/config/storybook/decorators/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { TranslationsDecorator } from "@/shared/config/storybook/decorators/TranslationsDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/decorators/SuspenseDecorator";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(TranslationsDecorator);
addDecorator(SuspenseDecorator);
