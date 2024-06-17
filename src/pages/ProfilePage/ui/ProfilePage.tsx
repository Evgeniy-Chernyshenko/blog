import { useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { profile: profileReducer };

export function ProfilePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <div className={cx("ProfilePage")}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
