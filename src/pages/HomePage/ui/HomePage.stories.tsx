import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import HomePage from "./HomePage";

export default {
  title: "pages/HomePage",
  component: HomePage,
  argTypes: {},
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const HomePageLight = Template.bind({});
HomePageLight.args = {};

export const HomePageDark = Template.bind({});
HomePageDark.args = {};
HomePageDark.decorators = [ThemeDecorator(Theme.DARK)];
