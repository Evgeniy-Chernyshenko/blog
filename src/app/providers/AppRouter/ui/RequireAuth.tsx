import { ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserAuthData, UserRole } from "@/entities/User";
import { appRoutes } from "@/shared/constants/appRoutes";

interface RequireAuthProps {
  children: ReactElement;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const userAuthData = useSelector(getUserAuthData);

  const hasAccess = useMemo(
    () =>
      userAuthData?.roles.some(
        (userRole) => roles?.includes(userRole) ?? true,
      ) ?? false,
    [roles, userAuthData?.roles],
  );

  if (!userAuthData) {
    return <Navigate to={appRoutes.getMainRoute()} replace />;
  }

  return hasAccess ? (
    children
  ) : (
    <Navigate to={appRoutes.getForbiddenRoute()} replace />
  );
};
