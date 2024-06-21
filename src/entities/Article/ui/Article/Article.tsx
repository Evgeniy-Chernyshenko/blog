import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleReducer } from "../../model/slice/articleSlice";
import s from "./Article.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchArticle } from "../../model/services/fetchArticle/fetchArticle";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "../../model/selectors/articleSelectors";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import ViewsIcon from "@/shared/assets/icons/views-icon.svg";
import DateIcon from "@/shared/assets/icons/date-icon.svg";
import { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";

const cx = classNamesBind(s);

interface ArticleProps {
  id: string;
  className?: string;
}

const initialReducers: ReducersList = { article: articleReducer };

export const Article = memo(function Article({ id, className }: ArticleProps) {
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);
  const { t } = useTranslation("article");

  useInitialEffect(() => dispatch(fetchArticle(id)));

  const renderBlock = (block: ArticleBlock, index: number) => {
    switch (block.type) {
      case "code":
        return <ArticleCodeBlock key={index} block={block} />;

      case "text":
        return <ArticleTextBlock key={index} block={block} />;

      case "image":
        return <ArticleImageBlock key={index} block={block} />;

      default:
        return null;
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cx("Article", [className])}>
        {isLoading && (
          <>
            <Skeleton
              width={200}
              height={200}
              borderRadius="50%"
              className={cx("image")}
            />
            <Skeleton width="60%" height={31} />
            <Skeleton width="40%" height={31} />
            <Skeleton height={231} />
            <Skeleton height={231} />
          </>
        )}

        {error && (
          <TextBlock
            align="center"
            size="l"
            text={t("Произошла ошибка при загрузке статьи")}
          />
        )}

        {data && (
          <div className={cx("Article", [className])}>
            <img src={data.img} alt={data.title} className={cx("image")} />

            <TextBlock title={data.title} text={data.subtitle} size="l" />

            <div className={cx("statistics")}>
              <div className={cx("statistic-item")}>
                <ViewsIcon /> <TextBlock text={data.views.toString()} />
              </div>
              <div className={cx("statistic-item")}>
                <DateIcon /> <TextBlock text={data.createdAt} />
              </div>
            </div>

            {data.blocks.map(renderBlock)}
          </div>
        )}
      </div>
    </DynamicModuleLoader>
  );
});
