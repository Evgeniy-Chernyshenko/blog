import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/themeProvidertemp";
import { TextBlock } from "./TextBlock";

export default {
  title: "shared/TextBlock",
  component: TextBlock,
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args) => (
  <TextBlock {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  title: "Title title title",
  text: "Text text text",
  theme: "primary",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title title title",
  text: "Text text text",
  theme: "primary",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight = Template.bind({});
ErrorLight.args = {
  title: "Title title title",
  text: "Text text text",
  theme: "error",
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: "Title title title",
  text: "Text text text",
  theme: "error",
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
