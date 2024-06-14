import { lazy } from "react";

export const LoginFormLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./LoginForm")), 2000)),
);
