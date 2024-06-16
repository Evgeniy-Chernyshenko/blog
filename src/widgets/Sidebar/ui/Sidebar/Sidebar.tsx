import { useState } from "react";
import { BugButton } from "@/app/providers/errorBoundarytemp";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { sidebarItemsList } from "../../model/items";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";
import s from "./Sidebar.module.scss";

const cx = classNamesBind(s);

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

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
        {sidebarItemsList.map((sidebarItem) => (
          <SidebarNavItem
            key={sidebarItem.path}
            item={sidebarItem}
            collapsed={collapsed}
          />
        ))}
      </div>

      <div className={cx("switchers")}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}
