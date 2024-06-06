import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeLightIcon from "@/shared/assets/icons/theme-light.svg";
import ThemeDarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Button } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", [className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === Theme.LIGHT ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
}
