import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import { StoreDecorator } from "@/app/config/storybook/decorators/StoreDecorator";
import { RouterDecorator } from "@/app/config/storybook/decorators/RouterDecorator";

const article = {
  title: "Кеттина статья",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 10223,
  createdAt: "2022-03-26",
  type: ["it"],
  userId: "2",
};

export default {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  decorators: [StoreDecorator(), withMock, RouterDecorator()],
  parameters: {
    mockData: [
      {
        url: `${__API_BASE_URL__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = () => (
  <ArticleRecommendationsList />
);

export const ArticleRecommendationsListLight = Template.bind({});

export const ArticleRecommendationsListDark = Template.bind({});
ArticleRecommendationsListDark.decorators = [ThemeDecorator(Theme.DARK)];
