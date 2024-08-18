import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import AddCommentForm from "./AddCommentForm";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  args: { onSubmit: action("onSubmit") },
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
