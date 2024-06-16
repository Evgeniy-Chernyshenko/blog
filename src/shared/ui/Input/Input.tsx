import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useState,
} from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Input.module.scss";

const cx = classNamesBind(s);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const CHARACTER_WIDTH = 8.797;

export const Input = memo(function Input({
  className,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  onSelect,
  ...restProps
}: InputProps) {
  const [caretOffset, setCaretOffset] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
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
    <div className={cx("Input", [className])}>
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
          {...restProps}
        />

        {isFocused && (
          <span
            className={cx("caret")}
            style={{
              width: `${CHARACTER_WIDTH}px`,
              left: `${caretOffset}px`,
            }}
          />
        )}
      </div>
    </div>
  );
});
