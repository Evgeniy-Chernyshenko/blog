import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./TextBlock.module.scss";

const cx = classNamesBind(s);

interface TextBlockProps {
  title?: string;
  text?: string;
  theme?: "primary" | "error";
  className?: string;
}

export const TextBlock = ({
  title,
  text,
  theme = "primary",
  className,
}: TextBlockProps) => {
  return (
    <div className={cx("TextBlock", [className, theme])}>
      {title && <p className={cx("title")}>{title}</p>}
      {text && <p className={cx("text")}>{text}</p>}
    </div>
  );
};
