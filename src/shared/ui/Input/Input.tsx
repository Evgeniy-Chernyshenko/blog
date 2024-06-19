import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  Ref,
  SyntheticEvent,
  useState,
  ReactElement,
} from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Input.module.scss";

const cx = classNamesBind(s);

interface InputProps<T extends "string" | "number" | "password" = "string">
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  type?: T;
  className?: string;
  onChange?: (value: T extends "number" ? number | undefined : string) => void;
}

const CHARACTER_WIDTH = 8.797;

const Component = <T extends "string" | "number" | "password" = "string">(
  {
    className,
    onChange,
    placeholder,
    onFocus,
    onBlur,
    onSelect,
    readOnly,
    type,
    value,
    ...restProps
  }: InputProps<T>,
  ref: Ref<HTMLInputElement>,
) => {
  const [caretOffset, setCaretOffset] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const isCaretVisible = isFocused && !readOnly;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let clearValue: string | number | undefined = e.target.value;

    if (type === "number") {
      const parsedNumber = Number.parseInt(clearValue, 10);
      clearValue = Number.isNaN(parsedNumber) ? undefined : parsedNumber;
    }

    onChange?.(clearValue as T extends "number" ? number | undefined : string);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    onBlur?.(e);
  };

  const handleSelect = (e: SyntheticEvent<HTMLInputElement>) => {
    const { scrollLeft, selectionStart } = e.currentTarget;

    setCaretOffset((selectionStart ?? 0) * CHARACTER_WIDTH - scrollLeft);

    onSelect?.(e);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cx("Input", [className])}>
      {placeholder && (
        <span className={cx("placeholder")}>{`${placeholder}>`}</span>
      )}

      <div className={cx("caret-wrapper")}>
        <input
          className={cx("input")}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          readOnly={readOnly}
          ref={ref}
          value={value ?? ""}
          {...restProps}
        />

        {isCaretVisible && (
          <span
            className={cx("caret")}
            style={{
              width: `${CHARACTER_WIDTH}px`,
              left: `${caretOffset}px`,
            }}
          />
        )}
      </div>
    </label>
  );
};
export const Input = memo(forwardRef(Component)) as <
  T extends "string" | "number" | "password" = "string",
>(
  // eslint-disable-next-line no-use-before-define
  props: InputProps<T> & { ref?: Ref<HTMLInputElement> },
) => ReactElement;
