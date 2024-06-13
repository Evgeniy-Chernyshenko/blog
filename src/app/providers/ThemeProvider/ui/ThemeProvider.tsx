import { FC, useMemo, useState } from "react";
import {
  LOCALSTORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

const initialTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const themeProviderValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};
