import { lazy } from "react";

export const ArticlePageLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./ArticlePage")), 2000)),
);
