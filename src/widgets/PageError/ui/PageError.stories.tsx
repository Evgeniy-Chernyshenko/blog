import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { PageError } from "./PageError";

export default {
  title: "widgets/PageError",
  component: PageError,
  argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {};

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
