import { memo } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames, classNamesBind } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";
import { Button } from "@/shared/ui/Button/Button";
import s from "./ThemeSwitcher.module.scss";

const cx = classNamesBind(s);

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps) {
  const { toggleTheme, nextTheme } = useTheme();

  return (
    <Button
      className={classNames("", [className])}
      onClick={toggleTheme}
      theme="clear"
    >
      <ThemeIcon
        className={cx("theme-icon", [nextTheme])}
        // @ts-ignore
        style={{ "--theme-icon-color": `var(--${nextTheme}-theme-icon-color)` }}
      />
    </Button>
  );
});
