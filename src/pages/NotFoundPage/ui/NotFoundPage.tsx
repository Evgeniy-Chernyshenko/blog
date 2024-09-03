import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./NotFoundPage.module.scss";
import { PageWrapper } from "@/widgets/PageWrapper";

const cx = classNamesBind(s);

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <PageWrapper
      className={cx("NotFoundPage", [className])}
      dataTestid="NotFoundPage"
    >
      {t("Страница не найдена")}
    </PageWrapper>
  );
};
