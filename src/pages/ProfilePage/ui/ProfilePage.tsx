import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "@/entities/Profile";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { profile: profileReducer };

export function ProfilePage() {
  const { t } = useTranslation("profile");

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <div className={cx("ProfilePage")}>
        <h1>{t("Настройки профиля")}</h1>
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
