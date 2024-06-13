import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { userActions } from "@/entities/User";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (userAuthData) {
      setIsOpenLoginModal(false);
    }
  }, [userAuthData]);

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

            <LoginModal
              opened={isOpenLoginModal}
              onClose={handleCloseLoginModal}
            />
          </>
        )}
      </div>
    </div>
  );
}
