import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./NotFoundPage.module.scss";

const cx = classNamesBind(s);

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={cx("NotFoundPage", [className])}>
      {t("Страница не найдена")}
    </div>
  );
};
