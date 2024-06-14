import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useCallback } from "react";
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
import { authByUsername } from "../../services/authByUsername/authByUsername";

const cx = classNamesBind(s);

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = { authByUsername: authByUsernameReducer };

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      dispatch(authByUsername({ username, password }));
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
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
};

export default LoginForm;
