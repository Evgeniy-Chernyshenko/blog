import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import s from "./ProfileCard.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { Input } from "@/shared/ui/Input/Input";

const cx = classNamesBind(s);

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const profileData = useSelector(getProfileData);

  return (
    <div className={cx("ProfileCard", [className])}>
      <div className={cx("header")}>
        <TextBlock title={t("Профиль")} />
        <Button>{t("Редактировать")}</Button>
      </div>

      <form className={cx("form")}>
        <Input
          placeholder={t("Ваше имя")}
          value={profileData?.firstName}
          autoFocus
        />
        <Input placeholder={t("Ваше имя")} value={profileData?.lastName} />
      </form>
    </div>
  );
};
