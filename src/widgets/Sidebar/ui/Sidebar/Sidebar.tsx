import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { useState } from "react";
import s from "./Sidebar.module.scss";

const cx = classNamesBind(s);

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cx("Sidebar", { collapsed }, [className])}>
      <button onClick={handleToggle}>toggle</button>

      <div className={cx("switchers")}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
