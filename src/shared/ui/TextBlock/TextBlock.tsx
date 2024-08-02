import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./TextBlock.module.scss";

const cx = classNamesBind(s);

type TextBlockSize = "s" | "m" | "l";

interface TextBlockProps {
  title?: string;
  text?: string;
  theme?: "primary" | "error" | "inverted";
  align?: "left" | "center" | "right";
  className?: string;
  size?: TextBlockSize;
  dataTestId?: string;
}

type HeaderTag = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextBlockSize, HeaderTag> = {
  s: "h3",
  m: "h2",
  l: "h1",
};

export const TextBlock = memo(function TextBlock({
  title,
  text,
  theme = "primary",
  align = "left",
  className,
  size = "m",
  dataTestId,
}: TextBlockProps) {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={cx("TextBlock", [className, theme, align, `size-${size}`])}>
      {title && (
        <HeaderTag
          data-testid={dataTestId ? `${dataTestId}.Header` : undefined}
          className={cx("title")}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Text`} className={cx("text")}>
          {text}
        </p>
      )}
    </div>
  );
});
