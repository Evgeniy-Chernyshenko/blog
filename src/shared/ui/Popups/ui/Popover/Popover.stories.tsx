import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Button } from "../../../Button/Button";
import { Popover } from "./Popover";
import { Theme } from "@/shared/constants/theme";

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

export const LeftTop = Template.bind({});
LeftTop.args = { direction: "leftTop" };

export const RightBottom = Template.bind({});
RightBottom.args = { direction: "rightBottom" };

export const RightTop = Template.bind({});
RightTop.args = { direction: "rightTop" };

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
