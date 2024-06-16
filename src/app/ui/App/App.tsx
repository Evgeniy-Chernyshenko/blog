import { Suspense, useEffect } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "../../providers/appRoutertemp";
import { Navbar } from "@/widgets/Navbar";
import s from "./App.module.scss";
import { Sidebar } from "@/widgets/Sidebar";
import { LOCALSTORAGE_USER_KEY } from "@/shared/constants/localStorage";
import { User, userActions } from "@/entities/usertemp";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const user: User = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? "",
      );

      if (user) {
        dispatch(userActions.setAuthData(user));
      }
    } catch (error) {}
  }, [dispatch]);

  return (
    <div className={cx("App")}>
      <Suspense fallback="Loading...">
        <Navbar className={cx("navbar")} />

        <Sidebar />

        <div className={cx("page-wrapper")}>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
