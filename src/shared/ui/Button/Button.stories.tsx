import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Button",
  theme: "primary",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Button",
  theme: "primary",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: "Button",
  theme: "clear",
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Button",
  theme: "clear",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  children: "Button",
  theme: "outlined",
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Button",
  theme: "outlined",
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
