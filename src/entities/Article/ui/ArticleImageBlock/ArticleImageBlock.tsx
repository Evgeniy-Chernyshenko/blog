import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { ArticleImageBlockType } from "../../model/types/article";
import s from "./ArticleImageBlock.module.scss";

const cx = classNamesBind(s);

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockType;
}

export const ArticleImageBlock = ({
  className,
  block,
}: ArticleImageBlockProps) => {
  return (
    <div className={cx("ArticleImageBlock", [className])}>
      <img src={block.src} alt={block.title} className={cx("image")} />

      {block.title && <TextBlock text={block.title} align="center" />}
    </div>
  );
};
