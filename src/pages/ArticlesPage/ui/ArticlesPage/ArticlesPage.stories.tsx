import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ArticlesPage from "./ArticlesPage";

export default {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const ArticlesPageLight = Template.bind({});

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK)];
