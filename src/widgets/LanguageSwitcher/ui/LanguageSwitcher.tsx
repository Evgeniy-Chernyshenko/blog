import { useTranslation } from "react-i18next";
import { ChangeEvent, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getLanguageOptions } from "../lib/getLanguageOptions";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const languageOptions = useMemo(
    () => getLanguageOptions(i18n.language),
    [getLanguageOptions, i18n.language],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className={classNames("", [className])}
      value={i18n.language}
      onChange={handleChange}
    >
      {languageOptions.map((languageOption) => (
        <option key={languageOption.value} value={languageOption.value}>
          {languageOption.title}
        </option>
      ))}
    </select>
  );
}
