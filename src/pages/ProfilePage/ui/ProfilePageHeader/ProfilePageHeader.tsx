import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button/Button";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "@/entities/Profile";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";

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
  readonly,
  isLoading,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = user?.id === profileData?.id;

  return (
    <HStack justify="between" fullwidth>
      <TextBlock title={t("Профиль")} />

      {canEdit && (
        <fieldset disabled={isLoading}>
          {readonly ? (
            <Button onClick={onEditClick}>{t("Редактировать")}</Button>
          ) : (
            <HStack>
              <Button onClick={onCancelClick} theme="outlined-red">
                {t("Отменить")}
              </Button>
              <Button onClick={onSaveClick}>{t("Сохранить")}</Button>
            </HStack>
          )}
        </fieldset>
      )}
    </HStack>
  );
};
