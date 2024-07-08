import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "../../providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import s from "./App.module.scss";
import { Sidebar } from "@/widgets/Sidebar";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { getIsInit, User, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

export function App() {
  const dispatch = useAppDispatch();
  const isInit = useSelector(getIsInit);

  useEffect(() => {
    try {
      const user: User = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? "",
      );

      if (user) {
        dispatch(userActions.setAuthData(user));
      }
    } catch (error) {
    } finally {
      dispatch(userActions.setIsInit());
    }
  }, [dispatch]);

  return (
    <div className={cx("App")}>
      <Suspense fallback="Loading...">
        <Navbar className={cx("navbar")} />

        <Sidebar />

        {isInit && <AppRouter />}
      </Suspense>
    </div>
  );
}
