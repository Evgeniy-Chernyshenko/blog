import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/Select/Select";
import { Country } from "../../model/types/country";

const options: SelectOption<Country>[] = [
  { value: Country.Russia, text: Country.Russia },
  { value: Country.Belarus, text: Country.Belarus },
  { value: Country.Ukrain, text: Country.Ukrain },
  { value: Country.Kazakhstan, text: Country.Kazakhstan },
  { value: Country.Armenia, text: Country.Armenia },
];

interface CountrySelectorProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country | undefined) => void;
}

export const CountrySelector = memo(
  ({ className, value, onChange }: CountrySelectorProps) => {
    const { t } = useTranslation();

    return (
      <Select
        options={options}
        value={value}
        onChange={onChange}
        className={classNames("", [className])}
        label={t("Выберите страну")}
      />
    );
  },
);
