import { createSelector } from "@reduxjs/toolkit";
import HomeIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";
import ProfileIcon from "@/shared/assets/icons/profile-icon.svg";
import ArticlesIcon from "@/shared/assets/icons/articles-icon.svg";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../types/sidebar";
import { appRoutes } from "@/shared/constants/appRoutes";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { text: "Главная", path: appRoutes.getMainRoute(), Icon: HomeIcon },
    { text: "О сайте", path: appRoutes.getAboutRoute(), Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        text: "Профиль",
        path: appRoutes.getProfileRoute(authData.id),
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        text: "Статьи",
        path: appRoutes.getArticlesRoute(),
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
