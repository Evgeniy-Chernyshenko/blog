import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { languageOptions } from "../constants/languageOptions";
import s from "./LanguageSwitcher.module.scss";

const cx = classNamesBind(s);

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className={cx("LanguageSwitcher", [className])}
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
