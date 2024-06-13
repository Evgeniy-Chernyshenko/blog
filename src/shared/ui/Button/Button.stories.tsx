import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Button",
  theme: "primary",
};

export const PrimaryLightDisabled = Template.bind({});
PrimaryLightDisabled.args = {
  children: "Button",
  theme: "primary",
  disabled: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Button",
  theme: "primary",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkDisabled = Template.bind({});
PrimaryDarkDisabled.args = {
  children: "Button",
  theme: "primary",
  disabled: true,
};
PrimaryDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];

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

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
  children: "Button",
  theme: "background",
};

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
  children: "Button",
  theme: "background-inverted",
};

export const BackgroundInvertedSquareSizeMLight = Template.bind({});
BackgroundInvertedSquareSizeMLight.args = {
  children: ">",
  theme: "background-inverted",
  square: true,
  size: "m",
};

export const BackgroundInvertedSquareSizeLLight = Template.bind({});
BackgroundInvertedSquareSizeLLight.args = {
  children: ">",
  theme: "background-inverted",
  square: true,
  size: "l",
};

export const BackgroundInvertedSquareSizeXLLight = Template.bind({});
BackgroundInvertedSquareSizeXLLight.args = {
  children: ">",
  theme: "background-inverted",
  square: true,
  size: "xl",
};
