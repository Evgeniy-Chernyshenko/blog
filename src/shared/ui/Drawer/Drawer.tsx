import { CSSProperties, memo, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { useModal } from "@/shared/lib/hooks/useModal";

const cx = classNamesBind(s);

interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  theme?: Theme;
  onClose: () => void;
}

interface CustomCSSProperties extends CSSProperties {
  "--animation-duration": string;
}

const ANIMATION_DURATION = 500;

export const Drawer = memo(function Drawer({
  isOpen,
  children,
  className,
  theme,
  onClose,
}: DrawerProps) {
  const { theme: currentTheme } = useTheme();
  const { close, isClosing } = useModal({
    isOpen,
    animationDuration: ANIMATION_DURATION,
    onClose,
  });

  if (!isOpen) {
    return null;
  }

  const style: CustomCSSProperties = {
    "--animation-duration": `${ANIMATION_DURATION}ms`,
  };

  return (
    <Portal>
      <Overlay onClose={close} style={style}>
        <div
          data-theme={theme ?? currentTheme}
          className={cx("Drawer", { toClosed: isClosing }, [className])}
        >
          <div className={cx("content")}>{children}</div>
        </div>
      </Overlay>
    </Portal>
  );
});
