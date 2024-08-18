import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeProviderDecorator } from "@/shared/config/storybook/decorators/ThemeProviderDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.decorators = [
  ThemeDecorator(Theme.DARK),
  ThemeProviderDecorator(Theme.DARK),
];
