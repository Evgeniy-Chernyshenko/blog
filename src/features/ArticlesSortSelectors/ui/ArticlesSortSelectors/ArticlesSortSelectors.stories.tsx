import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { ArticlesSortSelectors } from "./ArticlesSortSelectors";
import { Theme } from "@/shared/constants/theme";

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
