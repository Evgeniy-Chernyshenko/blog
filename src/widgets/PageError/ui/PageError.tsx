import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./PageError.module.scss";
import { Button } from "@/shared/ui/Button/Button";

const cx = classNamesBind(s);

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleReloadPageClick = () => {
    window.location.reload();
  };

  return (
    <div className={cx("PageError", [className])}>
      {t("Что-то пошло не так")}

      <Button onClick={handleReloadPageClick}>
        {t("Перезагрузить страницу")}
      </Button>
    </div>
  );
};
