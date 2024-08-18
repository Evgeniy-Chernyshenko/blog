import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import ForbiddenPage from "./ForbiddenPage";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

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
