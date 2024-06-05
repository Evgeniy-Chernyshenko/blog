import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import ThemeLightIcon from "@/shared/assets/icons/theme-light.svg";
import ThemeDarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Button } from "@/shared/ui/Button/Button";

const cx = classNamesBind(s);

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cx("ThemeSwitcher", [className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === Theme.LIGHT ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
