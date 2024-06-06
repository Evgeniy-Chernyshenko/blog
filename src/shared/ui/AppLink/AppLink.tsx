import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";

const cx = classNamesBind(s);

type AppLinkTheme = "primary" | "inverted";

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  theme = "primary",
  ...restProps
}) => <Link className={cx("AppLink", [className, theme])} {...restProps} />;
