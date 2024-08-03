import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleComments } from "./ArticleComments";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";

export default {
  title: "pages/ArticlePage/ArticleComments",
  component: ArticleComments,
  args: { id: "1" },
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => (
  <ArticleComments {...args} />
);

export const ArticleCommentsLight = Template.bind({});

export const ArticleCommentsDark = Template.bind({});
ArticleCommentsDark.decorators = [ThemeDecorator(Theme.DARK)];
