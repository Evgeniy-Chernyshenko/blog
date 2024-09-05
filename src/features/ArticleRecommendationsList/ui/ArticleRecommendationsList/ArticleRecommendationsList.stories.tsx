import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";
import articleImg from "@/shared/assets/tests/article-image.png";

const article = {
  title: "Кеттина статья",
  subtitle: "Что нового в JS за 2022 год?",
  img: articleImg,
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
