import { Story } from "@storybook/react";
import { Theme } from "@/shared/constants/theme";
import { ThemeProvider } from "@/app/providers/ThemeProvider/testing";

export const ThemeProviderDecorator =
  (theme: Theme) => (StoryComponent: Story) => {
    return (
      <ThemeProvider hardcodeTheme={theme}>
        <StoryComponent />
      </ThemeProvider>
    );
  };
