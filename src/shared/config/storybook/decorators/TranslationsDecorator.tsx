import { Story } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "../../i18n/i18nForTests";

export const TranslationsDecorator = (StoryComponent: Story) => {
  return (
    <I18nextProvider i18n={i18nForTests}>
      <StoryComponent />
    </I18nextProvider>
  );
};
