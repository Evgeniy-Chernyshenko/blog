import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import HomePage from "./HomePage";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "pages/HomePage",
  component: HomePage,
  argTypes: {},
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const HomePageLight = Template.bind({});
HomePageLight.args = {};

export const HomePageDark = Template.bind({});
HomePageDark.args = {};
HomePageDark.decorators = [ThemeDecorator(Theme.DARK)];
