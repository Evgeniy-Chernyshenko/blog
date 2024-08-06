import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "../../../Button/Button";
import { Popover } from "./Popover";

export default {
  title: "shared/Popover",
  component: Popover,
  args: {
    trigger: <Button>Popover</Button>,
    content: "Hello world!",
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const NormalLight = Template.bind({});
NormalLight.args = {};

export const leftTop = Template.bind({});
leftTop.args = { direction: "leftTop" };

export const rightBottom = Template.bind({});
rightBottom.args = { direction: "rightBottom" };

export const rightTop = Template.bind({});
rightTop.args = { direction: "rightTop" };

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
