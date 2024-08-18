import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { ThemeProviderDecorator } from "@/shared/config/storybook/decorators/ThemeProviderDecorator";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [
    StoreDecorator({
      user: { authData: { id: "1", username: "John", roles: [] } },
    }),
    RouterDecorator(),
  ],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SidebarLight = Template.bind({});
SidebarLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];

export const SidebarDark = Template.bind({});
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  ThemeProviderDecorator(Theme.DARK),
];

export const SidebarNoAuth = Template.bind({});
SidebarNoAuth.decorators = [
  ThemeProviderDecorator(Theme.LIGHT),
  StoreDecorator(),
];
