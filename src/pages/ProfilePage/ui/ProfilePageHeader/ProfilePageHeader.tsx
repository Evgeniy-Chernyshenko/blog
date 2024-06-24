import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import s from "./ProfilePageHeader.module.scss";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "@/entities/Profile";

const cx = classNamesBind(s);

interface ProfilePageHeaderProps {
  onEditClick: () => void;
  onCancelClick: () => void;
  onSaveClick: () => void;
  className?: string;
  readonly?: boolean;
  isLoading: boolean;
}

export const ProfilePageHeader = ({
  onEditClick,
  onCancelClick,
  onSaveClick,
  className,
  readonly,
  isLoading,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = user?.id === profileData?.id;

  return (
    <div className={cx("ProfilePageHeader", [className])}>
      <TextBlock title={t("Профиль")} />

      {canEdit && (
        <fieldset className={cx("actions")} disabled={isLoading}>
          {readonly ? (
            <Button onClick={onEditClick}>{t("Редактировать")}</Button>
          ) : (
            <>
              <Button onClick={onCancelClick} theme="outlined-red">
                {t("Отменить")}
              </Button>
              <Button onClick={onSaveClick}>{t("Сохранить")}</Button>
            </>
          )}
        </fieldset>
      )}
    </div>
  );
};
