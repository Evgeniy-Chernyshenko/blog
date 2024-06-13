import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useCallback } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { getAuthByUsername } from "../../model/selectors/getAuthByUsername/getAuthByUsername";
import { authByUsernameActions } from "../..";
import { authByUsername } from "../../services/authByUsername/authByUsername";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";

const cx = classNamesBind(s);

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, isLoading, error } =
    useSelector(getAuthByUsername);
  const dispatch = useDispatch();

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(authByUsernameActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(authByUsernameActions.setPassword(value));
    },
    [dispatch],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(authByUsername({ username, password }));
  };

  return (
    <form className={cx("LoginForm", [className])} onSubmit={handleSubmit}>
      <div className={cx("top-text-block", [className])}>
        <TextBlock title={t("Форма авторизации")} />
        {error && <TextBlock theme="error" text={t(error)} />}
      </div>

      <Input
        name="username"
        placeholder={t("Введите username")}
        autoFocus
        value={username}
        onChange={handleChangeUsername}
        disabled={isLoading}
      />
      <Input
        type="password"
        name="password"
        placeholder={t("Введите password")}
        value={password}
        onChange={handleChangePassword}
        disabled={isLoading}
      />

      <Button className={cx("submit-button")} disabled={isLoading}>
        {t("Войти")}
      </Button>
    </form>
  );
};
