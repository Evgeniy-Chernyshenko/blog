import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { TextBlock } from "./TextBlock";
import { Theme } from "@/shared/constants/theme";

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

export const SizeS = Template.bind({});
SizeS.args = {
  title: "Title title title",
  text: "Text text text",
  size: "s",
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: "Title title title",
  text: "Text text text",
  size: "m",
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: "Title title title",
  text: "Text text text",
  size: "l",
};
