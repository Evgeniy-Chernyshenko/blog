import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { TextBlock } from "@/shared/ui/TextBlock";
import { AppLink } from "@/shared/ui/AppLink";
import { HStack } from "@/shared/ui/Stack";
import { NotificationsButton } from "@/features/NotificationsButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { getUserAuthData } from "@/entities/User";
import { appRoutes } from "@/shared/constants/appRoutes";

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
            <AppLink to={appRoutes.getArticleCreateRoute()}>
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
