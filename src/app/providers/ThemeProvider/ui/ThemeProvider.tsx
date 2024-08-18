import { ReactNode, useMemo, useState } from "react";
import { LOCALSTORAGE_THEME_KEY } from "@/shared/constants/localStorage";
import { Theme } from "@/shared/constants/theme";
import { ThemeContext } from "../../../../shared/lib/contexts/ThemeContext";

interface ThemeProviderProps {
  hardcodeTheme?: Theme;
  children: ReactNode;
}

const initialTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider = ({
  hardcodeTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const themeProviderValue = useMemo(
    () => ({ theme: hardcodeTheme ?? theme, setTheme }),
    [theme, hardcodeTheme],
  );

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};
