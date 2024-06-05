import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import s from "./Navbar.module.scss";

const cx = classNamesBind(s);

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={cx("Navbar", [className])}>
      Logo
      <div className={cx("menu")}>
        <AppLink to={appRoutes.main.path} theme="inverted">
          {t("Главная")}
        </AppLink>
        <AppLink to={appRoutes.about.path} theme="inverted">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
