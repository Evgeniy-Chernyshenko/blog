import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/themeProvidertemp";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {},
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLogin = Template.bind({});
WithLogin.decorators = [
  StoreDecorator({ user: { authData: { id: "1", username: "John" } } }),
];
