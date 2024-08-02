import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import AdminPanelPage from "./AdminPanelPage";
import { RouterDecorator } from "@/app/config/storybook/decorators/RouterDecorator";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

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
