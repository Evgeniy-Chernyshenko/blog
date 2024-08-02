import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserRoles = (state: StateSchema) =>
  state.user.authData?.roles ?? [];

export const isUserAdmin = createSelector(getUserRoles, (userRoles) =>
  userRoles.includes("admin"),
);

export const isUserManager = createSelector(getUserRoles, (userRoles) =>
  userRoles.includes("manager"),
);
