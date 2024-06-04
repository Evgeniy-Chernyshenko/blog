import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { HomePageLazy } from "./pages/HomePage/HomePageLazy";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
