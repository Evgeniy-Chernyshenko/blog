import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";
import s from "./Sidebar.module.scss";
import { getUserAuthData } from "@/entities/User";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { BugButton } from "@/shared/ui/BugButton";
import { HStack, VStack } from "@/shared/ui/Stack";

const cx = classNamesBind(s);

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = Boolean(useSelector(getUserAuthData));
  const sidebarItemsList = useSelector(getSidebarItems);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
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

      <VStack className={cx("nav-items")} role="navigation">
        {sidebarItemsList
          .filter((sidebarItem) => (sidebarItem.authOnly ? isAuth : true))
          .map((sidebarItem) => (
            <SidebarNavItem
              key={sidebarItem.path}
              item={sidebarItem}
              collapsed={collapsed}
            />
          ))}
      </VStack>

      <HStack className={cx("switchers")} justify="center">
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </HStack>
    </aside>
  );
});
