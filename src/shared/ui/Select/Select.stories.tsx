import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Select } from "./Select";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "shared/Select",
  component: Select,
  args: {
    label: "Селект",
    options: [
      { text: "Опция 1", value: "opt1" },
      { text: "Опция 2", value: "opt2" },
      { text: "Опция 3", value: "opt3" },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PrimaryLight = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
