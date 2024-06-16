import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/authByUsername";
import { getUserAuthData } from "@/entities/user/model/selectors/getUserAuthData/getUserAuthData";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { userActions } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

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
    <div className={cx("Navbar", [className])}>
      |||
      <div className={cx("menu")}>
        {userAuthData ? (
          <Button theme="outlined-inverted" onClick={handleLogout}>
            {t("Выйти")}
          </Button>
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
      </div>
    </div>
  );
}
