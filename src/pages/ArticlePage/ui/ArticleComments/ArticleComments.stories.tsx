import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { ArticleComments } from "./ArticleComments";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

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
