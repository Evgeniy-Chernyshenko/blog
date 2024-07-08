import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper";

function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <PageWrapper>
      <h1>{t("О сайте")}</h1>
    </PageWrapper>
  );
}

export default AboutPage;
