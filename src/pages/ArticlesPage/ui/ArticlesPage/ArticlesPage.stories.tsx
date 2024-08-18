import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import ArticlesPage from "./ArticlesPage";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const ArticlesPageLight = Template.bind({});

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK)];
