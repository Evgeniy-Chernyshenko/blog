import i18n from "@/app/config/i18n/i18n";

interface LanguageOption {
  value: string;
  title: string;
}

export const languageOptions: LanguageOption[] = [
  { value: "ru", title: i18n.t("Русский") },
  { value: "en", title: i18n.t("Английский") },
];
