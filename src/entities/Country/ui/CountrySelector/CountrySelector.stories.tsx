import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { CountrySelector } from "./CountrySelector";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "entities/CountrySelector",
  component: CountrySelector,
} as ComponentMeta<typeof CountrySelector>;

const Template: ComponentStory<typeof CountrySelector> = () => (
  <CountrySelector />
);

export const PrimaryLight = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
