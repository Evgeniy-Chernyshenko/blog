import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserAuthData } from "@/entities/User";
import { appRoutes } from "../config/appRoutes";

interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const userAuthData = useSelector(getUserAuthData);

  return userAuthData ? children : <Navigate to={appRoutes.main.path} />;
};
