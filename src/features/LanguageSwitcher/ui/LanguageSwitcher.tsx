import { useTranslation } from "react-i18next";
import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(function LanguageSwitcher({
  className,
  short,
}: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const languageOptions = useMemo(
    () => [
      { value: "ru", title: t(short ? "Русский короткий" : "Русский") },
      { value: "en", title: t(short ? "Английский короткий" : "Английский") },
    ],
    [short, t],
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
});
