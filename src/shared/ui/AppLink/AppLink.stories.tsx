import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/themeProvidertemp";
import { AppLink } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {},
  args: { to: "/" },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "AppLink",
  theme: "primary",
};

export const PrimarydDark = Template.bind({});
PrimarydDark.args = {
  children: "AppLink",
  theme: "primary",
};
PrimarydDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedLight = Template.bind({});
InvertedLight.args = {
  children: "AppLink",
  theme: "inverted",
};

export const IvertedDark = Template.bind({});
IvertedDark.args = {
  children: "AppLink",
  theme: "inverted",
};
IvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
