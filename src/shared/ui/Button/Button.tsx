import { ButtonHTMLAttributes, memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.scss";

const cx = classNamesBind(s);

type ButtonTheme =
  | "primary"
  | "clear"
  | "outlined"
  | "background"
  | "background-inverted"
  | "outlined-inverted"
  | "outlined-red";

type ButtonSize = "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  dataTestId?: string;
}

export const Button = memo(function Button({
  className,
  theme = "primary",
  square = false,
  size = "m",
  dataTestId,
  ...restProps
}: ButtonProps) {
  const mods = { square };
  const additional = [className, theme, size];

  return (
    <button
      data-testid={dataTestId}
      className={cx("Button", mods, additional)}
      {...restProps}
    />
  );
});
