import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";

const cx = classNamesBind(s);

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <form className={cx("LoginForm", [className])}>
      <Input name="username" placeholder={t("Введите username")} autoFocus />
      <Input
        type="password"
        name="password"
        placeholder={t("Введите password")}
      />

      <Button className={cx("submit-button")}>{t("Войти")}</Button>
    </form>
  );
};
