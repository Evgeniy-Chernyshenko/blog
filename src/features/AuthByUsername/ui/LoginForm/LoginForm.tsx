import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { FormEvent, memo, useCallback } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import {
  authByUsernameActions,
  authByUsernameReducer,
} from "../../model/slice/authByUsernameSlice";
import { getAuthUsername } from "../../model/selectors/getAuthUsername/getAuthUsername";
import { getAuthPassword } from "../../model/selectors/getAuthPassword/getAuthPassword";
import { getAuthIsLoading } from "../../model/selectors/getAuthIsLoading/getAuthIsLoading";
import { getAuthError } from "../../model/selectors/getAuthError/getAuthError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { authByUsername } from "../../model/services/authByUsername/authByUsername";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

export interface LoginFormProps {
  onSuccess: () => void;
  className?: string;
}

const initialReducers: ReducersList = { authByUsername: authByUsernameReducer };

const LoginForm = memo(function LoginForm({
  onSuccess,
  className,
}: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      const result = await dispatch(authByUsername({ username, password }));

      if (result.meta.requestStatus === "fulfilled") {
        onSuccess();
      }
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
