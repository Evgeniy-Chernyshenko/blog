import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { NotificationItem } from "./NotificationItem";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const LightWithLink = Template.bind({});
LightWithLink.args = {
  notification: {
    id: "1",
    title: "Уведомление 1",
    description: "Описание уведомления 1",
    link: "http://localhost:3000/admin",
    userId: "1",
  },
};

export const DarkWithoutLink = Template.bind({});
DarkWithoutLink.args = {
  notification: {
    id: "1",
    title: "Уведомление 1",
    description: "Описание уведомления 1",
    userId: "1",
  },
};
DarkWithoutLink.decorators = [ThemeDecorator(Theme.DARK)];
