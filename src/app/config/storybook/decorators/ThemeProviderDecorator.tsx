import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";

export const ThemeProviderDecorator =
  (theme: Theme) => (StoryComponent: Story) => {
    return (
      <ThemeProvider hardcodeTheme={theme}>
        <StoryComponent />
      </ThemeProvider>
    );
  };
