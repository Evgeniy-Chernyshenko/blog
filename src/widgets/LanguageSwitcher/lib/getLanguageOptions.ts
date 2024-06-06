import i18n from "@/app/config/i18n/i18n";

interface LanguageOption {
  value: string;
  title: string;
}

export const getLanguageOptions = (lng: string) => {
  const languageOptions: LanguageOption[] = [
    { value: "ru", title: i18n.t("Русский", { lng }) },
    { value: "en", title: i18n.t("Английский") },
  ];

  return languageOptions;
};
