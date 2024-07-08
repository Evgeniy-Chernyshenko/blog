import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  args: {
    tabItems: [
      { value: "tab 1", text: "Tab 1" },
      { value: "tab 2", text: "Tab 2" },
      { value: "tab 3", text: "Tab 3" },
    ],
    value: "tab 1",
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const PrimaryLight = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
