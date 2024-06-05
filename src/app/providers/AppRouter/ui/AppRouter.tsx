import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {Object.values(appRoutes).map((appRoute) => (
          <Route key={appRoute.path} {...appRoute} />
        ))}
      </Routes>
    </Suspense>
  );
};
