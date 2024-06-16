import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/themeProvidertemp";
import { Sidebar } from "./Sidebar";
import { ThemeProviderDecorator } from "@/app/config/storybook/decorators/ThemeProviderDecorator";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
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
