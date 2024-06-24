import { createSelector } from "@reduxjs/toolkit";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import HomeIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";
import ProfileIcon from "@/shared/assets/icons/profile-icon.svg";
import ArticlesIcon from "@/shared/assets/icons/articles-icon.svg";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { text: "Главная", path: appRoutes.main.path, Icon: HomeIcon },
    { text: "О сайте", path: appRoutes.about.path, Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        text: "Профиль",
        path: `${appRoutes.profile.pathWithoutParams}/${authData.id}`,
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        text: "Статьи",
        path: appRoutes.articles.path,
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
