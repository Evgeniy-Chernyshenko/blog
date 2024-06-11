import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleToggleLoginModal = useCallback(() => {
    setIsOpenLoginModal((prev) => !prev);
  }, []);

  return (
    <div className={cx("Navbar", [className])}>
      |||
      <div className={cx("menu")}>
        <Button theme="outlined-inverted" onClick={handleToggleLoginModal}>
          {t("Войти")}
        </Button>

        <Modal opened={isOpenLoginModal} onClose={handleToggleLoginModal}>
          !!!
        </Modal>
      </div>
    </div>
  );
}
