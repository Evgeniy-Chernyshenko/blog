import { createSelector } from "@reduxjs/toolkit";
import HomeIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";
import ProfileIcon from "@/shared/assets/icons/profile-icon.svg";
import ArticlesIcon from "@/shared/assets/icons/articles-icon.svg";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../types/sidebar";
import { routePaths } from "@/shared/constants/appRoutes";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { text: "Главная", path: routePaths.MAIN, Icon: HomeIcon },
    { text: "О сайте", path: routePaths.ABOUT, Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        text: "Профиль",
        path: `${routePaths.PROFILE}${authData.id}`,
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        text: "Статьи",
        path: routePaths.ARTICLES,
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
