import { useContext, useLayoutEffect, useState } from "react";
import { getNextTheme } from "./getNextTheme";
import { LOCALSTORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [nextTheme, setNextTheme] = useState(getNextTheme(Theme, theme));

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = getNextTheme(Theme, theme);
    const newNextTheme = getNextTheme(Theme, newTheme);

    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
    setNextTheme(newNextTheme);
  };

  return { theme, nextTheme, toggleTheme };
};
