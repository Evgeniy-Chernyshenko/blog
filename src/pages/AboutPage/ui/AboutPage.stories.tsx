import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import AboutPage from "./AboutPage";
import { RouterDecorator } from "@/app/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "pages/AboutPage",
  component: AboutPage,
  argTypes: {},
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
