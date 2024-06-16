import { memo } from "react";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { classNames, classNamesBind } from "@/shared/lib/classNames/classNames";
import ThemeLightIcon from "@/shared/assets/icons/theme-light.svg";
import ThemeDarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Button } from "@/shared/ui/Button/Button";
import s from "./ThemeSwitcher.module.scss";

const cx = classNamesBind(s);

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", [className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === Theme.LIGHT ? (
        <ThemeLightIcon className={cx("theme-icon")} />
      ) : (
        <ThemeDarkIcon className={cx("theme-icon")} />
      )}
    </Button>
  );
});
