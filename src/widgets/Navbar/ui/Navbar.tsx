import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleOpenLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const handleCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  return (
    <div className={cx("Navbar", [className])}>
      |||
      <div className={cx("menu")}>
        <Button theme="outlined-inverted" onClick={handleOpenLoginModal}>
          {t("Войти")}
        </Button>

        <LoginModal opened={isOpenLoginModal} onClose={handleCloseLoginModal} />
      </div>
    </div>
  );
}
