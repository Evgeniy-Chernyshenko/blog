import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames as cx } from "@/shared/lib/classNames/classNames";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { routePaths } from "@/shared/constants/appRoutes";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(function AvatarDropdown({
  className,
}: AvatarDropdownProps) {
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const userAuthData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);

    dispatch(userActions.setAuthData(null));
  }, [dispatch]);

  if (!userAuthData) {
    return null;
  }

  return (
    <Dropdown
      className={cx("", [className])}
      direction="rightBottom"
      trigger={
        <Avatar
          size={40}
          src={userAuthData.avatar}
          alt={userAuthData.username}
        />
      }
      items={[
        ...(isAdmin || isManager
          ? [
              {
                text: t("Админка"),
                href: `${routePaths.ADMIN}`,
              },
            ]
          : []),
        {
          text: t("Профиль"),
          href: `${routePaths.PROFILE}${userAuthData.id}`,
        },
        {
          text: t("Выйти"),
          onClick: handleLogout,
        },
      ]}
    />
  );
});
