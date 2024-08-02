import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "@/app/config/storybook/decorators/StyleDecorator";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { TranslationsDecorator } from "@/app/config/storybook/decorators/TranslationsDecorator";

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
