import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { NotificationsButton } from "@/features/NotificationsButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);

  const handleOpenLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const handleCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  return (
    <header className={cx("Navbar", [className])}>
      <TextBlock theme="inverted" text={t("Blog App")} />

      <nav className={cx("menu")}>
        {userAuthData ? (
          <>
            <AppLink to={appRoutes.createArticle.path}>
              <Button theme="background-inverted">{t("Создать статью")}</Button>
            </AppLink>

            <HStack gap={16}>
              <NotificationsButton />
              <AvatarDropdown />
            </HStack>
          </>
        ) : (
          <>
            <Button theme="outlined-inverted" onClick={handleOpenLoginModal}>
              {t("Войти")}
            </Button>

            {/* {isOpenLoginModal && (
              <LoginModal
                isOpen={isOpenLoginModal}
                onClose={handleCloseLoginModal}
              />
            )} */}
            <LoginModal
              isOpen={isOpenLoginModal}
              onClose={handleCloseLoginModal}
            />
          </>
        )}
      </nav>
    </header>
  );
});
