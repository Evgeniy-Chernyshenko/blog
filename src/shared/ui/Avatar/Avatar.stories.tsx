import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";
import avatar from "./avatar.jpg";

export default {
  title: "shared/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  src: avatar,
  alt: "Avatar",
};

export const Avatar50 = Template.bind({});
Avatar50.args = {
  size: 50,
  src: avatar,
  alt: "Avatar",
};
