import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ArticlePage from "./ArticlePage";

export default {
  title: "pages/ArticlePage",
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />;

export const ArticlePageLight = Template.bind({});

export const ArticlePageDark = Template.bind({});
ArticlePageDark.decorators = [ThemeDecorator(Theme.DARK)];
