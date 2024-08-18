import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  args: { placeholder: "Type text" },
  decorators: [
    StoreDecorator({
      authByUsername: {
        username: "John",
        password: "password",
        isLoading: false,
      },
    }),
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.decorators = [
  StoreDecorator({
    authByUsername: {
      username: "John",
      password: "password",
      error: "Something error text",
      isLoading: false,
    },
  }),
];

export const WithLoading = Template.bind({});
WithLoading.decorators = [
  StoreDecorator({
    authByUsername: {
      username: "John",
      password: "password",
      isLoading: true,
    },
  }),
];
