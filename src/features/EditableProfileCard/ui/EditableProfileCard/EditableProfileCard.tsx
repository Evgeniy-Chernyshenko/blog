import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { EditableProfileHeader } from "../EditableProfileHeader/EditableProfileHeader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { getProfileFormData } from "../../model/selectors/getProfileFormData/getProfileFormData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidationErrors } from "../../model/selectors/getProfileValidationErrors/getProfileValidationErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { ValidateProfileError } from "../../model/types/profile";
import { ProfileCard } from "@/entities/Profile";

interface EditableProfileCardProps {
  userId: string;
}

const initialReducers: ReducersList = { profile: profileReducer };

export const EditableProfileCard = memo(function EditableProfileCard({
  userId,
}: EditableProfileCardProps) {
  const dispatch = useAppDispatch();
  const prodileFormData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);
  const { t } = useTranslation("profile");

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
    (value: Country) => {
      dispatch(profileActions.setFormData({ country: value }));
    },
    [dispatch],
  );

  const handleChangeCurrency = useCallback(
    (value: Currency) => {
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
      <VStack>
        <EditableProfileHeader
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
            dataTestId="EditableProfileHeader.Error"
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
      </VStack>
    </DynamicModuleLoader>
  );
});
