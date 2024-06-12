import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter";

export function HomePage() {
  const { t } = useTranslation("main");

  return (
    <>
      <h1>{t("Главная страница")}</h1>
      <Counter />
    </>
  );
}

export default HomePage;
