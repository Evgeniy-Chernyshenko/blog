import { ButtonHTMLAttributes, forwardRef, memo } from "react";
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
  fullwidth?: boolean;
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
      className,
      theme = "primary",
      square = false,
      size = "m",
      dataTestId,
      fullwidth,
      ...restProps
    }: ButtonProps,
    ref,
  ) {
    const mods = { square, fullwidth };
    const additional = [className, theme, size];

    return (
      <button
        ref={ref}
        data-testid={dataTestId}
        className={cx("Button", mods, additional)}
        {...restProps}
      />
    );
  }),
);
