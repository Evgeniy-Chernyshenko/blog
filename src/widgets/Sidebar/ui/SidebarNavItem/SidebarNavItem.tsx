import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import s from "./SidebarNavItem.module.scss";

const cx = classNamesBind(s);

interface SidebarNavItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
  className?: string;
}

export const SidebarNavItem = memo(function SidebarNavItem({
  item,
  collapsed,
  className,
}: SidebarNavItemProps) {
  const { t } = useTranslation();

  return (
    <AppLink
      className={cx("SidebarNavItem", [className])}
      to={item.path}
      theme="inverted"
    >
      <item.Icon />
      {!collapsed && t(item.text)}
    </AppLink>
  );
});
