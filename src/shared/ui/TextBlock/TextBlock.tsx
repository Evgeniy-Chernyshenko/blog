import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./TextBlock.module.scss";

const cx = classNamesBind(s);

interface TextBlockProps {
  title?: string;
  text?: string;
  theme?: "primary" | "error";
  align?: "left" | "center" | "right";
  className?: string;
}

export const TextBlock = memo(function TextBlock({
  title,
  text,
  theme = "primary",
  align = "left",
  className,
}: TextBlockProps) {
  return (
    <div className={cx("TextBlock", [className, theme, align])}>
      {title && <p className={cx("title")}>{title}</p>}
      {text && <p className={cx("text")}>{text}</p>}
    </div>
  );
});
