import { memo, ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppRouteObject } from "@/shared/types/router";
import { appRouterConfig } from "../config/appRouterConfig";

export const AppRouter = memo(function AppRouter() {
  const renderWithWrapper = (appRoute: AppRouteObject): ReactElement => {
    const { authOnly, element, ...restAppRoute } = appRoute;

    return (
      <Route
        key={appRoute.path}
        {...restAppRoute}
        element={
          authOnly ? (
            <RequireAuth roles={appRoute.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{appRouterConfig.map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
