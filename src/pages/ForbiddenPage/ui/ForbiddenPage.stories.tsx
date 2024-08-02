import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ForbiddenPage from "./ForbiddenPage";
import { RouterDecorator } from "@/app/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  argTypes: {},
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const ForbiddenPageLight = Template.bind({});
ForbiddenPageLight.args = {};

export const ForbiddenPageDark = Template.bind({});
ForbiddenPageDark.args = {};
ForbiddenPageDark.decorators = [ThemeDecorator(Theme.DARK)];
