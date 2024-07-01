import { lazy } from "react";

export const ProfilePageLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./ProfilePage")), 1000)),
);
