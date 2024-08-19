import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { TextBlock } from "@/shared/ui/TextBlock";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";

interface EditableProfileHeaderProps {
  onEditClick: () => void;
  onCancelClick: () => void;
  onSaveClick: () => void;
  className?: string;
  readonly?: boolean;
  isLoading: boolean;
}

export const EditableProfileHeader = ({
  onEditClick,
  onCancelClick,
  onSaveClick,
  readonly,
  isLoading,
}: EditableProfileHeaderProps) => {
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
            <Button
              onClick={onEditClick}
              dataTestId="EditableProfileHeader.EditButton"
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack>
              <Button
                onClick={onCancelClick}
                theme="outlined-red"
                dataTestId="EditableProfileHeader.CancelButton"
              >
                {t("Отменить")}
              </Button>
              <Button
                onClick={onSaveClick}
                dataTestId="EditableProfileHeader.SaveButton"
              >
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </fieldset>
      )}
    </HStack>
  );
};
