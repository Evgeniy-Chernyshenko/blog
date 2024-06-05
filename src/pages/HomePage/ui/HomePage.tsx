import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("main");

  return <h1>{t("Главная страница")}</h1>;
};

export default HomePage;
