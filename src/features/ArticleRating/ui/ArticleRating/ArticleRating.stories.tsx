import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "features/ArticleRating",
  component: ArticleRating,
  args: { articleId: "1" },
  decorators: [
    withMock,
    StoreDecorator({
      user: {
        authData: {
          id: "1",
        },
      },
    }),
  ],
  parameters: {
    layout: "centered",
    mockData: [
      {
        url: `${__API_BASE_URL__}/articles-rating?articleId=1&userId=1`,
        method: "GET",
        status: 200,
        response: [
          {
            id: "1",
            articleId: "1",
            userId: "1",
            rating: 4,
            feedback: "Хорошая статья",
          },
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutRate = Template.bind({});
WithoutRate.parameters = {
  ...WithoutRate.parameters,
  mockData: [
    {
      url: `${__API_BASE_URL__}/articles-rating?articleId=1&userId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
};
