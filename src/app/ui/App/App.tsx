import { Suspense } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "../../providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import s from "./App.module.scss";
import { Sidebar } from "@/widgets/Sidebar";

const cx = classNamesBind(s);

export function App() {
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
