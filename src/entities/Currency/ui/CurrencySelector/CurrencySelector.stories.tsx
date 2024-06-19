import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { CurrencySelector } from "./CurrencySelector";

export default {
  title: "entities/CurrencySelector",
  component: CurrencySelector,
} as ComponentMeta<typeof CurrencySelector>;

const Template: ComponentStory<typeof CurrencySelector> = () => (
  <CurrencySelector />
);

export const PrimaryLight = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
