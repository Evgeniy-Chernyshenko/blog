import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SidebarLight = Template.bind({});

export const SidebarDark = Template.bind({});
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];
