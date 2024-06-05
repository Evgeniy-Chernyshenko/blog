import { routeObjects } from "@/app/providers/AppRouter/config/routesConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeObjects.map((routeObject) => (
          <Route key={routeObject.path} {...routeObject} />
        ))}
      </Routes>
    </Suspense>
  );
};
