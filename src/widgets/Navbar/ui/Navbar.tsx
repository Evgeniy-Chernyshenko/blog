import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import s from "./Navbar.module.scss";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  console.log({ className });
  return (
    <div className={cx("Navbar", [className])}>
      Logo
      <div className={cx("menu")}>
        <AppLink to={appRoutes.main.path} theme="inverted">
          Home
        </AppLink>
        <AppLink to={appRoutes.about.path} theme="inverted">
          About
        </AppLink>
      </div>
    </div>
  );
};
