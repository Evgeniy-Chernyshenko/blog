import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import AdminPanelPage from "./AdminPanelPage";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  argTypes: {},
  decorators: [RouterDecorator(), StoreDecorator()],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => (
  <AdminPanelPage />
);

export const AdminPanelPageLight = Template.bind({});
AdminPanelPageLight.args = {};

export const AdminPanelPageDark = Template.bind({});
AdminPanelPageDark.args = {};
AdminPanelPageDark.decorators = [ThemeDecorator(Theme.DARK)];
