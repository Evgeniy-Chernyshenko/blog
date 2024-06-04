import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { HomePageLazy } from "./pages/HomePage/HomePageLazy";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>toggle theme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
