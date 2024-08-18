import { Story } from "@storybook/react";
import { Theme } from "@/shared/constants/theme";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.setAttribute("data-theme", theme);

  return <StoryComponent />;
};
