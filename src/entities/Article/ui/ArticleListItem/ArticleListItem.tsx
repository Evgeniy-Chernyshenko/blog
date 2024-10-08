import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleListItem.module.scss";
import {
  ArticleType,
  ArticleTextBlockType,
  ArticleView,
} from "../../model/types/article";
import { TextBlock } from "@/shared/ui/TextBlock";
import ViewsIcon from "@/shared/assets/icons/views-icon.svg";
import { Card } from "@/shared/ui/Card";
import { useHover } from "@/shared/lib/hooks/useHover";
import { Avatar } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";
import { formatDate } from "@/shared/lib/utils/formatters";
import { AppLink } from "@/shared/ui/AppLink";
import { appRoutes } from "@/shared/constants/appRoutes";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton";

const cx = classNamesBind(s);

interface ArticleListItemProps {
  article: ArticleType;
  view?: ArticleView;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(function ArticleListItem({
  article,
  view = "grid",
  className,
  target,
}: ArticleListItemProps) {
  const [hover, bindHover] = useHover();
  const { t, i18n } = useTranslation("article");

  const formattedDate = formatDate(article.createdAt, i18n.language);

  const Date = <TextBlock className={cx("date")} text={formattedDate} />;
  const Image = (
    <AppImage
      className={cx("image")}
      src={article.img}
      alt={article.title}
      fallback={<Skeleton height={250} />}
    />
  );
  const Tags = (
    <TextBlock className={cx("tags")} text={article.type.join(", ")} />
  );
  const Views = (
    <div className={cx("views")}>
      <TextBlock text={String(article.views)} />
      <ViewsIcon />
    </div>
  );

  if (view === "grid") {
    return (
      <AppLink to={appRoutes.getArticleRoute(article.id)} target={target}>
        <Card
          className={cx("ArticleListItem", { hover }, [className, view])}
          {...bindHover}
        >
          {Date}
          {Image}
          <div className={cx("header")}>
            {Tags}

            {Views}
          </div>
          <TextBlock className={cx("title")} text={article.title} />
        </Card>
      </AppLink>
    );
  }

  const firstParagraph = (
    article.blocks.find(
      (block) => block.type === "text",
    ) as ArticleTextBlockType
  ).paragraphs?.[0];

  return (
    <Card className={cx("ArticleListItem", [className, view])}>
      <div className={cx("header")}>
        <div className={cx("user")}>
          <Avatar
            src={article.user.avatar}
            alt={article.user.username}
            size={30}
          />
          <TextBlock text={article.user.username} />
        </div>

        {Date}
      </div>

      <TextBlock className={cx("title")} title={article.title} />

      {Tags}

      {Image}

      <div className={cx("footer")}>
        <AppLink to={appRoutes.getArticleRoute(article.id)} target={target}>
          <Button theme="outlined">{t("Читать далее")}</Button>
        </AppLink>

        {Views}
      </div>

      {firstParagraph && (
        <TextBlock text={firstParagraph} className={cx("description")} />
      )}
    </Card>
  );
});
