import { Listbox as HListBox } from "@headlessui/react";
import { Fragment, memo, ReactNode, useCallback, useMemo } from "react";
import { HStack } from "../../../Stack/HStack/HStack";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ListBox.module.scss";
import { Button } from "../../../Button/Button";
import { DropDownDirection } from "../../types";
import popupStyles from "../../styles/index.module.scss";
import { mapDirectionToClass } from "../../styles/mapDirectionToClass";

const cx = classNamesBind(s);

export interface ListBoxOption<T> {
  text: ReactNode;
  value: T;
  disabled?: boolean;
}

interface ListBoxProps<T> {
  options: ListBoxOption<T>[];
  onChange?: (value: T) => void;
  value?: T;
  defaultText?: ReactNode;
  disabled?: boolean;
  label?: string;
  className?: string;
  direction?: DropDownDirection;
}

const Component = <T,>({
  options,
  value,
  onChange,
  defaultText,
  disabled,
  label,
  className,
  direction = "leftBottom",
}: ListBoxProps<T>) => {
  const handleChange = useCallback(
    (option: ListBoxOption<T>) => {
      onChange?.(option.value);
    },
    [onChange],
  );

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  return (
    <HStack gap={4} className={cx("", [className])}>
      {label && (
        <span
          className={cx("", { [popupStyles.disabled]: disabled })}
        >{`${label}>`}</span>
      )}

      <HListBox
        as="div"
        value={selectedOption}
        onChange={handleChange}
        className={cx(popupStyles.popup)}
        disabled={disabled}
      >
        <HListBox.Button as={Button} className={popupStyles.trigger}>
          {selectedOption?.text ?? defaultText}
        </HListBox.Button>

        <HListBox.Options
          className={cx("options", [mapDirectionToClass[direction]])}
        >
          {options.map((option, index) => (
            <HListBox.Option
              key={index}
              value={option}
              as={Fragment}
              disabled={option.disabled}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={cx("option", {
                    [popupStyles.active]: active,
                    selected,
                    [popupStyles.disabled]: disabled,
                  })}
                >
                  {option.text}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export const ListBox = memo(Component) as typeof Component;
