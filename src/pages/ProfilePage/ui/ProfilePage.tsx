import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  profileActions,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileReadonly } from "@/entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "@/entities/Profile/model/services/updateProfileData/updateProfileData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { profile: profileReducer };

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const prodileFormData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <div className={cx("ProfilePage")}>
        <ProfilePageHeader
          isLoading={isLoading}
          readonly={readonly}
          onEditClick={handleEditClick}
          onCancelClick={handleCancelClick}
          onSaveClick={handleSaveClick}
        />

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
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
