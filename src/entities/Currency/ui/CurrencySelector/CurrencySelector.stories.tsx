import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { CurrencySelector } from "./CurrencySelector";
import { Theme } from "@/shared/constants/theme";

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
