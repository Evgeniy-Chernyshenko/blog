import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const ProfilePageLight = Template.bind({});

export const ProfilePageDark = Template.bind({});
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)];
