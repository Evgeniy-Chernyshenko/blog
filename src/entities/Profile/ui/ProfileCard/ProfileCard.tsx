import { useTranslation } from "react-i18next";
import { FormEvent, useEffect, useRef } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ProfileCard.module.scss";
import { TextBlock } from "@/shared/ui/TextBlock";
import { Input } from "@/shared/ui/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";
import { Country, CountrySelector } from "@/entities/Country";
import { Currency, CurrencySelector } from "@/entities/Currency";
import { VStack } from "@/shared/ui/Stack";

const cx = classNamesBind(s);

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  className?: string;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value?: number) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onSubmit: () => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  readonly,
  className,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency,
  onSubmit,
}: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (readonly) {
      return;
    }

    firstInputRef.current?.focus();
  }, [readonly]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit();
  };

  const mods = { loading: isLoading, error };

  return (
    <VStack className={cx("ProfileCard", mods, [className])} fullwidth>
      {data && !isLoading && !error && (
        <>
          {data?.avatar && (
            <Avatar
              src={data.avatar}
              alt={t("Аватар")}
              className={cx("avatar")}
            />
          )}

          <form onSubmit={handleSubmit}>
            <fieldset disabled={readonly}>
              <VStack>
                <Input
                  placeholder={t("Имя пользователя")}
                  value={data.username}
                  onChange={onChangeUsername}
                  ref={firstInputRef}
                />

                <Input
                  placeholder={t("Ваше имя")}
                  value={data.firstName}
                  onChange={onChangeFirstName}
                  dataTestId="ProfileCard.firstName"
                />

                <Input
                  placeholder={t("Ваша фамилия")}
                  value={data.lastName}
                  onChange={onChangeLastName}
                  dataTestId="ProfileCard.lastName"
                />

                <Input
                  placeholder={t("Возраст")}
                  value={data.age}
                  onChange={onChangeAge}
                  type="number"
                />

                <CountrySelector
                  value={data.country}
                  onChange={onChangeCountry}
                />

                <Input
                  placeholder={t("Город")}
                  value={data.city}
                  onChange={onChangeCity}
                />

                <Input
                  placeholder={t("Аватар")}
                  value={data.avatar}
                  onChange={onChangeAvatar}
                />

                <CurrencySelector
                  value={data.currency}
                  onChange={onChangeCurrency}
                />

                {
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <button type="submit" hidden />
                }
              </VStack>
            </fieldset>
          </form>
        </>
      )}

      {isLoading && <Loader />}

      {error && (
        <TextBlock
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу", { ns: "translation" })}
          theme="error"
          align="center"
        />
      )}
    </VStack>
  );
};
