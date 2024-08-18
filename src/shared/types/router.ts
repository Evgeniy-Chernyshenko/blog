import { ReactElement } from "react";
// eslint-disable-next-line blog-project/layers-import
import { UserRole } from "@/entities/User";

export interface AppRouteObject {
  path: string;
  pathWithoutParams?: string;
  element: ReactElement;
  authOnly?: boolean;
  roles?: UserRole[];
}
