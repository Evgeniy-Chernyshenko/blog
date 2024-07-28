import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";
import { ListBox, ListBoxOption } from "@/shared/ui/ListBox/ListBox";

const options: ListBoxOption<Country>[] = [
  { value: Country.Russia, text: Country.Russia },
  { value: Country.Belarus, text: Country.Belarus },
  { value: Country.Ukrain, text: Country.Ukrain },
  { value: Country.Kazakhstan, text: Country.Kazakhstan },
  { value: Country.Armenia, text: Country.Armenia },
];

interface CountrySelectorProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
}

export const CountrySelector = memo(
  ({ className, value, onChange }: CountrySelectorProps) => {
    const { t } = useTranslation("profile");

    return (
      <ListBox
        options={options}
        value={value}
        onChange={onChange}
        className={classNames("", [className])}
        label={t("Выберите страну")}
        defaultText={t("Выберите страну")}
      />
    );
  },
);
