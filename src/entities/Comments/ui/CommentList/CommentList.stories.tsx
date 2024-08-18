import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { CommentList } from "./CommentList";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "entities/CommentList",
  component: CommentList,
  args: {
    comments: [
      {
        id: "1",
        text: "Comment 1",
        user: { id: "1", username: "username1", avatar, roles: [] },
      },
      {
        id: "2",
        text: "Comment 2",
        user: { id: "2", username: "username2", avatar, roles: [] },
      },
    ],
  },
  decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = { comments: [], isLoading: true };
