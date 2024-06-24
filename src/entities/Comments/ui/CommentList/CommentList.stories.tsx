import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { CommentList } from "./CommentList";
import avatar from "@/shared/assets/tests/avatar.jpg";

export default {
  title: "entities/CommentList",
  component: CommentList,
  args: {
    comments: [
      {
        id: "1",
        text: "Comment 1",
        user: { id: "1", username: "username1", avatar },
      },
      {
        id: "2",
        text: "Comment 2",
        user: { id: "2", username: "username2", avatar },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = { comments: [], isLoading: true };
