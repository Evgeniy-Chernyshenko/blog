import { Theme } from "@/shared/constants/theme";

export const getNextTheme = <T extends object>(
  themes: T,
  currentTheme: T[keyof T],
): Theme => {
  const themeValues = Object.values(themes);

  const currentThemeIndex = themeValues.findIndex(
    (value) => value === currentTheme,
  );
  const nextThemeIndex =
    currentThemeIndex + 1 === themeValues.length ? 0 : currentThemeIndex + 1;
  const newTheme = themeValues[nextThemeIndex];

  return newTheme;
};
