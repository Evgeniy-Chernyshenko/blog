import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { CommentItem } from "./CommentItem";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "entities/CommentItem",
  component: CommentItem,
  args: {
    data: {
      id: "1",
      text: "Comment 1",
      user: { id: "1", username: "username1", avatar, roles: [] },
    },
  },
  decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = { isLoading: true, data: undefined };
