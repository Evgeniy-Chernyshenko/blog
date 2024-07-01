import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./LoginForm")), 1000)),
);
