import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticlesViewSelector } from "./ArticlesViewSelector";

export default {
  title: "features/ArticlesViewSelector",
  component: ArticlesViewSelector,
} as ComponentMeta<typeof ArticlesViewSelector>;

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => (
  <ArticlesViewSelector {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
