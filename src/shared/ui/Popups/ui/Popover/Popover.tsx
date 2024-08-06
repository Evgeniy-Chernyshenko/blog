import { memo, ReactNode } from "react";
import { Popover as HPopover } from "@headlessui/react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Popover.module.scss";
import { DropDownDirection } from "../../types";
import popupStyles from "../../styles/index.module.scss";
import { mapDirectionToClass } from "../../styles/mapDirectionToClass";

const cx = classNamesBind(s);

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  direction?: DropDownDirection;
  className?: string;
}

export const Popover = memo(function Popover({
  trigger,
  content,
  direction = "leftBottom",
  className,
}: PopoverProps) {
  return (
    <HPopover as="div" className={cx(popupStyles.popup, [className])}>
      <HPopover.Button as="div" className={popupStyles.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={cx("content", [mapDirectionToClass[direction]])}
      >
        {content}
      </HPopover.Panel>
    </HPopover>
  );
});
