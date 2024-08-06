import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Dropdown.module.scss";
import { AppLink } from "../../../AppLink/AppLink";
import { DropDownDirection } from "../../types";
import popupStyles from "../../styles/index.module.scss";
import { mapDirectionToClass } from "../../styles/mapDirectionToClass";

const cx = classNamesBind(s);

interface DropdownItemBase {
  text: string;
  disabled?: boolean;
}

interface DropdownItemHref extends DropdownItemBase {
  href: string;
  onClick?: never;
}

interface DropdownItemButton extends DropdownItemBase {
  onClick: () => void;
  href?: never;
}

export type DropdownItem = DropdownItemHref | DropdownItemButton;

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  direction?: DropDownDirection;
  className?: string;
}

export const Dropdown = memo(function Dropdown({
  trigger,
  items,
  direction = "leftBottom",
  className,
}: DropdownProps) {
  return (
    <Menu as="div" className={cx(popupStyles.popup, [className])}>
      <Menu.Button as="div" className={popupStyles.trigger}>
        {trigger}
      </Menu.Button>

      <Menu.Items className={cx("items", [mapDirectionToClass[direction]])}>
        {items.map((item, index) => (
          <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
            {({ active, disabled }) =>
              item.href ? (
                <AppLink
                  to={item.href}
                  className={cx("item", {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: disabled,
                  })}
                  onClick={
                    item.disabled ? (e) => e.preventDefault() : undefined
                  }
                >
                  {item.text}
                </AppLink>
              ) : (
                <button
                  className={cx("item", {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: disabled,
                  })}
                  onClick={item.onClick}
                  disabled={item.disabled}
                >
                  {item.text}
                </button>
              )
            }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
});
