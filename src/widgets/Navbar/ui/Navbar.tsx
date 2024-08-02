import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const handleOpenLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const handleCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);

    dispatch(userActions.setAuthData(null));
  }, [dispatch]);

  return (
    <header className={cx("Navbar", [className])}>
      <TextBlock theme="inverted" text={t("Blog App")} />

      <nav className={cx("menu")}>
        {userAuthData ? (
          <>
            <AppLink to={appRoutes.createArticle.path}>
              <Button theme="background-inverted">{t("Создать статью")}</Button>
            </AppLink>

            <Dropdown
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
                        href: `${appRoutes.adminPanel.path}`,
                      },
                    ]
                  : []),
                {
                  text: t("Профиль"),
                  href: `${appRoutes.profile.pathWithoutParams}/${userAuthData.id}`,
                },
                {
                  text: t("Выйти"),
                  onClick: handleLogout,
                },
              ]}
            />
          </>
        ) : (
          <>
            <Button theme="outlined-inverted" onClick={handleOpenLoginModal}>
              {t("Войти")}
            </Button>

            {isOpenLoginModal && (
              <LoginModal
                opened={isOpenLoginModal}
                onClose={handleCloseLoginModal}
              />
            )}
          </>
        )}
      </nav>
    </header>
  );
});
