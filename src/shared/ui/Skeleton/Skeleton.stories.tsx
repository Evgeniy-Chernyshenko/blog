import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Skeleton } from "./Skeleton";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleLight = Template.bind({});
CircleLight.args = { width: 200, height: 200, borderRadius: "50%" };

export const CircleDark = Template.bind({});
CircleDark.args = { width: 200, height: 200, borderRadius: "50%" };
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
