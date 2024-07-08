import { lazy } from "react";

export const ArticlesPageLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./ArticlesPage")), 1000)),
);
