import { Story } from "@storybook/react";

export const AppDecorator = (StoryComponent: Story) => {
  return (
    <div className="app">
      <StoryComponent />
    </div>
  );
};
