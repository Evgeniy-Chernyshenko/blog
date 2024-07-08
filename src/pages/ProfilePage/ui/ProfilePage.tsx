import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
  ValidateProfileError,
} from "@/entities/Profile";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { PageWrapper } from "@/widgets/PageWrapper";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { profile: profileReducer };

function ProfilePage() {
  const dispatch = useAppDispatch();
  const prodileFormData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);
  const { t } = useTranslation("profile");
  const { id: userId } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (userId) {
      dispatch(fetchProfileData(userId));
    }
  });

  const handleEditClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSaveClick = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const handleChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.setFormData({ firstName: value }));
    },
    [dispatch],
  );

  const handleChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.setFormData({ lastName: value }));
    },
    [dispatch],
  );

  const handleChangeAge = useCallback(
    (value: number | undefined) => {
      dispatch(profileActions.setFormData({ age: value }));
    },
    [dispatch],
  );

  const handleChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.setFormData({ city: value }));
    },
    [dispatch],
  );

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.setFormData({ username: value }));
    },
    [dispatch],
  );

  const handleChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.setFormData({ avatar: value }));
    },
    [dispatch],
  );

  const handleChangeCountry = useCallback(
    (value: Country | undefined) => {
      dispatch(profileActions.setFormData({ country: value }));
    },
    [dispatch],
  );

  const handleChangeCurrency = useCallback(
    (value: Currency | undefined) => {
      dispatch(profileActions.setFormData({ currency: value }));
    },
    [dispatch],
  );

  const validationErrorTranslates: Record<ValidateProfileError, string> = {
    INCORRECT_AGE: t("Не указан возраст"),
    INCORRECT_AVATAR: t("Не указан аватар"),
    INCORRECT_CITY: t("Не указан город"),
    INCORRECT_COUNTRY: t("Не указана страна"),
    INCORRECT_CURRENCY: t("Не указана валюта"),
    INCORRECT_FIRSTNAME: t("Не указано имя"),
    INCORRECT_LASTNAME: t("Не указана фамилия"),
    INCORRECT_USERNAME: t("Не указано имя пользователя"),
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <PageWrapper>
        <div className={cx("ProfilePage")}>
          <ProfilePageHeader
            isLoading={isLoading}
            readonly={readonly}
            onEditClick={handleEditClick}
            onCancelClick={handleCancelClick}
            onSaveClick={handleSaveClick}
          />

          {validationErrors?.map((validationError) => (
            <TextBlock
              theme="error"
              text={validationErrorTranslates[validationError]}
              key={validationError}
            />
          ))}

          <ProfileCard
            data={prodileFormData}
            error={error}
            isLoading={isLoading}
            readonly={readonly}
            onChangeFirstName={handleChangeFirstName}
            onChangeLastName={handleChangeLastName}
            onChangeAge={handleChangeAge}
            onChangeCity={handleChangeCity}
            onChangeUsername={handleChangeUsername}
            onChangeAvatar={handleChangeAvatar}
            onChangeCountry={handleChangeCountry}
            onChangeCurrency={handleChangeCurrency}
            onSubmit={handleSaveClick}
          />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
