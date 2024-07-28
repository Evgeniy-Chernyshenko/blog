import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Currency } from "../../model/types/currency";
import { ListBox, ListBoxOption } from "@/shared/ui/ListBox/ListBox";

const options: ListBoxOption<Currency>[] = [
  { value: Currency.RUB, text: Currency.RUB },
  { value: Currency.EUR, text: Currency.EUR },
  { value: Currency.USD, text: Currency.USD },
];

interface CurrencySelectorProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

export const CurrencySelector = memo(
  ({ className, value, onChange }: CurrencySelectorProps) => {
    const { t } = useTranslation("profile");

    return (
      <ListBox
        options={options}
        value={value}
        onChange={onChange}
        className={classNames("", [className])}
        label={t("Выберите валюту")}
        dropdownDirection="top"
      />
    );
  },
);
