import { lazy } from "react";

export const HomePageLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./HomePage")), 2000)),
);
