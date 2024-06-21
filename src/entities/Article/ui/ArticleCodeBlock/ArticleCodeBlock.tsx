import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/Code/Code";
import { ArticleCodeBlockType } from "../../model/types/article";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock = ({
  className,
  block,
}: ArticleCodeBlockProps) => {
  return (
    <div className={classNames("", [className])}>
      <Code text={block.code} />
    </div>
  );
};
