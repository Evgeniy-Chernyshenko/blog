import { SVGProps, VFC } from "react";

export interface SidebarItemType {
  text: string;
  path: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
