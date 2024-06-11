import { Story } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.setAttribute("data-theme", theme);

  return <StoryComponent />;
};
