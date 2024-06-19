import { memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { PageLoader } from "@/widgets/PageLoader";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";

export const AppRouter = memo(function AppRouter() {
  const isAuth = Boolean(useSelector(getUserAuthData));

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(appRoutes)
          .filter((appRoute) => (appRoute.authOnly ? isAuth : true))
          .map((appRoute) => (
            <Route key={appRoute.path} {...appRoute} />
          ))}
      </Routes>
    </Suspense>
  );
});
