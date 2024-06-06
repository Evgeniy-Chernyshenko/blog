import { ButtonHTMLAttributes, FC } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.scss";

const cx = classNamesBind(s);

type ButtonTheme = "primary" | "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = "primary",
  ...restProps
}) => <button className={cx("Button", [className, theme])} {...restProps} />;
