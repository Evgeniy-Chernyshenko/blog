import { lazy } from "react";

export const ArticleEditPageLazy = lazy(
  () =>
    // @ts-ignore
    new Promise((r) => setTimeout(() => r(import("./ArticleEditPage")), 1000)),
);
