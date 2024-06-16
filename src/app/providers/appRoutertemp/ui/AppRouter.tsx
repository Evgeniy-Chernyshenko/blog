import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "@/app/providers/appRoutertemp/config/appRoutes";
import { PageLoader } from "@/widgets/PageLoader";

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(appRoutes).map((appRoute) => (
          <Route key={appRoute.path} {...appRoute} />
        ))}
      </Routes>
    </Suspense>
  );
}
