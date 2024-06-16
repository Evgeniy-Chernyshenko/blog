import { memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";

const cx = classNamesBind(s);

type AppLinkTheme = "primary" | "inverted";

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink = memo(function AppLink({
  className,
  theme = "primary",
  ...restProps
}: AppLinkProps) {
  return <Link className={cx("AppLink", [className, theme])} {...restProps} />;
});
