import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleTextBlock.module.scss";
import { TextBlock } from "@/shared/ui/TextBlock";
import { ArticleTextBlockType } from "../../model/types/article";

const cx = classNamesBind(s);

interface ArticleTextBlockProps {
  block: ArticleTextBlockType;
  className?: string;
}

export const ArticleTextBlock = memo(function ArticleTextBlock({
  block,
  className,
}: ArticleTextBlockProps) {
  return (
    <div className={cx("ArticleTextBlock", [className])}>
      {block.title && <TextBlock title={block.title} />}

      {block.paragraphs.map((paragraph, index) => (
        <TextBlock key={index} text={paragraph} />
      ))}
    </div>
  );
});
