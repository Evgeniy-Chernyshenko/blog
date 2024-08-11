import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RatingCard } from "./RatingCard";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "entities/RatingCard",
  component: RatingCard,
  args: {
    title: "Как вам статья?",
    feedbackTitle: "Пожалуйста, оставьте отзыв",
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
  <RatingCard {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutFeedback = Template.bind({});
WithoutFeedback.args = { hasFeedback: false };
