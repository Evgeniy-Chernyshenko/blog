import { memo, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";

const cx = classNamesBind(s);

interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  theme?: Theme;
  onClose: () => void;
}

export const Drawer = memo(function Drawer({
  isOpen,
  children,
  className,
  theme,
  onClose,
}: DrawerProps) {
  const { theme: currentTheme } = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Overlay onClose={onClose}>
        <div
          data-theme={theme ?? currentTheme}
          className={cx("Drawer", [className])}
        >
          <div className={cx("content")}>{children}</div>
        </div>
      </Overlay>
    </Portal>
  );
});
