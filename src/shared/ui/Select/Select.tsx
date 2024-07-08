import { ChangeEvent, memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Select.module.scss";

const cx = classNamesBind(s);

export interface SelectOption<T extends string> {
  value: T;
  text: string;
}

interface SelectProps<T extends string> {
  options?: SelectOption<T>[];
  value?: T;
  label?: string;
  className?: string;
  onChange?: (value: T) => void;
}

const Component = function Select<T extends string>({
  options,
  value,
  className,
  label,
  onChange,
}: SelectProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cx("Select", [className])}>
      {label && `${label}>`}

      <select className={cx("select")} value={value} onChange={handleChange}>
        {
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          // <option key="" className={cx("option")} value={undefined} />
        }

        {options?.map((option) => (
          <option
            key={option.value}
            className={cx("option")}
            value={option.value ?? options}
          >
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
};

export const Select = memo(Component) as typeof Component;
