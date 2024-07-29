import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Dropdown.module.scss";
import { AppLink } from "../AppLink/AppLink";
import { DropDownDirection } from "../../types/ui";

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
    <Menu as="div" className={cx("Dropdown", [className])}>
      <Menu.Button as="div" className={cx("trigger")}>
        {trigger}
      </Menu.Button>

      <Menu.Items className={cx("items", [direction])}>
        {items.map((item, index) => (
          <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
            {({ active }) =>
              item.href ? (
                <AppLink
                  to={item.href}
                  className={cx("item", { active, disabled: item.disabled })}
                  onClick={
                    item.disabled ? (e) => e.preventDefault() : undefined
                  }
                >
                  {item.text}
                </AppLink>
              ) : (
                <button
                  className={cx("item", { active, disabled: item.disabled })}
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
