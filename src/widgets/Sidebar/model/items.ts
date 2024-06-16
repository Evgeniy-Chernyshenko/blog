import { SVGProps, VFC } from "react";
import { appRoutes } from "@/app/providers/appRoutertemp/config/appRoutes";
import HomeIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";
import ProfileIcon from "@/shared/assets/icons/profile-icon.svg";

export interface SidebarItemType {
  text: string;
  path: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  { text: "Главная", path: appRoutes.main.path, Icon: HomeIcon },
  { text: "О сайте", path: appRoutes.about.path, Icon: AboutIcon },
  { text: "Профиль", path: appRoutes.profile.path, Icon: ProfileIcon },
];
