import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "@/shared/config/storybook/decorators/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { TranslationsDecorator } from "@/shared/config/storybook/decorators/TranslationsDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/decorators/SuspenseDecorator";
import { Theme } from "@/shared/constants/theme";

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
  // layout: "fullscreen",
  themes: {
    default: "light",
    list: [
      { name: "light", class: Theme.LIGHT, color: "#ffffff" },
      { name: "dark", class: Theme.DARK, color: "#000000" },
      { name: "orange", class: Theme.ORANGE, color: "#ff7b00" },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(TranslationsDecorator);
addDecorator(SuspenseDecorator);
