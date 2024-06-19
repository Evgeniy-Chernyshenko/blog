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
}

export const Button = memo(function Button({
  className,
  theme = "primary",
  square = false,
  size = "m",
  ...restProps
}: ButtonProps) {
  const mods = { square };
  const additional = [className, theme, size];

  return <button className={cx("Button", mods, additional)} {...restProps} />;
});
