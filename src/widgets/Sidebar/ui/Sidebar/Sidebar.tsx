import { useState } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import s from "./Sidebar.module.scss";
import { BugButton } from "@/app/providers/ErrorBoundary";

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
      <button onClick={handleToggle} data-testid="sidebar-toggle">
        |||
      </button>
      <BugButton />

      <div className={cx("switchers")}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
