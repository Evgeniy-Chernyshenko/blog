import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticlesSortSelectors } from "./ArticlesSortSelectors";

export default {
  title: "features/ArticlesSortSelectors",
  component: ArticlesSortSelectors,
} as ComponentMeta<typeof ArticlesSortSelectors>;

const Template: ComponentStory<typeof ArticlesSortSelectors> = (args) => (
  <ArticlesSortSelectors {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
