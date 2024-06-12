import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter";

function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <>
      <h1>{t("О сайте")}</h1>
      <Counter />
    </>
  );
}

export default AboutPage;
