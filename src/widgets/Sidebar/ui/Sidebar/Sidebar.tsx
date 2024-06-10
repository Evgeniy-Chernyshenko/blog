import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import s from "./Sidebar.module.scss";
import { BugButton } from "@/app/providers/ErrorBoundary";
import { Button } from "@/shared/ui/Button/Button";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import HomeIcon from "@/shared/assets/icons/home-icon.svg";
import AboutIcon from "@/shared/assets/icons/about-icon.svg";

const cx = classNamesBind(s);

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cx("Sidebar", { collapsed }, [className])}
      data-testid="sidebar"
    >
      <Button
        className={cx("collapse-btn")}
        onClick={handleToggle}
        data-testid="sidebar-toggle"
        theme="background-inverted"
        square
        size="l"
      >
        {collapsed ? ">" : "<"}
      </Button>

      <BugButton />

      <div className={cx("nav-items")}>
        <AppLink
          to={appRoutes.main.path}
          theme="inverted"
          className={cx("nav-item")}
        >
          <HomeIcon className={cx("nav-icon")} />
          {!collapsed && t("Главная")}
        </AppLink>

        <AppLink
          to={appRoutes.about.path}
          theme="inverted"
          className={cx("nav-item")}
        >
          <AboutIcon className={cx("nav-icon")} />
          {!collapsed && t("О сайте")}
        </AppLink>
      </div>

      <div className={cx("switchers")}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}
