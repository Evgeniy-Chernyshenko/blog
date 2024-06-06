import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";

export function AppRouter() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {Object.values(appRoutes).map((appRoute) => (
          <Route key={appRoute.path} {...appRoute} />
        ))}
      </Routes>
    </Suspense>
  );
}
