import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ArticlesPage from "./ArticlesPage";
import { RouterDecorator } from "@/app/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const ArticlesPageLight = Template.bind({});

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK)];
