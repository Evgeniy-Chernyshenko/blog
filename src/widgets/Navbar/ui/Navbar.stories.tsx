import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {},
  decorators: [StoreDecorator(), RouterDecorator()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLogin = Template.bind({});
WithLogin.decorators = [
  StoreDecorator({
    user: { authData: { id: "1", username: "John", roles: [] } },
  }),
];
