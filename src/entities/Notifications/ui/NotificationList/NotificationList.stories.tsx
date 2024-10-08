import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  decorators: [StoreDecorator()],
  parameters: {
    mockData: [
      {
        url: `${__API_BASE_URL__}/notifications`,
        method: "GET",
        status: 200,
        response: [
          {
            id: "1",
            title: "Уведомление 1",
            description: "Описание уведомления 1",
            link: "http://localhost:3000/admin",
            userId: "1",
          },
          {
            id: "2",
            title: "Уведомление 2",
            description: "Описание уведомления 1",
            userId: "1",
          },
          {
            id: "3",
            title: "Уведомление 3",
            description: "Описание уведомления 3",
            link: "http://localhost:3000/admin",
            userId: "1",
          },
          {
            id: "4",
            title: "Уведомление для Кетти 1",
            description: "Описание уведомления для Кетти 1",
            link: "http://localhost:3000/admin",
            userId: "2",
          },
          {
            id: "5",
            title: "Уведомление для Кетти 2",
            description: "Описание уведомления для Кетти 2",
            userId: "2",
          },
        ],
      },
    ],
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
