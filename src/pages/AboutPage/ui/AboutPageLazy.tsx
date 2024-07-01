import { lazy } from "react";

export const AboutPageLazy = lazy(
  // @ts-ignore
  () => new Promise((r) => setTimeout(() => r(import("./AboutPage")), 1000)),
);
