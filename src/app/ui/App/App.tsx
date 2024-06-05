import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "../../providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import s from "./App.module.scss";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

const cx = classNamesBind(s);

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx("App")} data-theme={theme}>
      <Suspense fallback="Loading...">
        <Navbar className={cx("navbar")} />

        <Sidebar />

        <div className={cx("page-wrapper")}>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
