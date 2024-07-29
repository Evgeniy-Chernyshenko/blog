import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  args: {
    trigger: <Button>Dropdown</Button>,
    items: [
      { text: "item 1", onClick: () => {} },
      { text: "item 2", href: "#" },
      { text: "item 3", href: "#", disabled: true },
      { text: "item 4", onClick: () => {}, disabled: true },
    ],
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
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
