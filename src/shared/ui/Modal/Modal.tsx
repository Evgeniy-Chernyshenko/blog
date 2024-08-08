import { CSSProperties, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Overlay } from "../Overlay/Overlay";

const cx = classNamesBind(s);

interface CustomCSSProperties extends CSSProperties {
  "--animation-duration": string;
}

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  lazy?: boolean;
  withoutPortal?: boolean;
  className?: string;
  onClose?: () => void;
}

const ANIMATION_DURATION = 500;

export const Modal = ({
  isOpen,
  children,
  lazy,
  withoutPortal,
  className,
  onClose,
}: ModalProps) => {
  const { close, isClosing, isMounted, isOpening, isClosed, isOpened } =
    useModal({
      isOpen,
      animationDuration: ANIMATION_DURATION,
      onClose,
    });

  const style: CustomCSSProperties = {
    "--animation-duration": `${ANIMATION_DURATION}ms`,
  };

  const Component = (
    <Overlay
      onClose={close}
      style={style}
      className={cx(
        "Modal",
        {
          toOpened: (isOpening || isOpened) && !(isClosing || isClosed),
          closed: !isOpen,
        },
        [className],
      )}
    >
      <div className={cx("content-container")}>
        <div className={cx("content")}>
          {lazy && !isMounted ? null : children}
        </div>
      </div>
    </Overlay>
  );

  return withoutPortal ? Component : <Portal>{Component}</Portal>;
};
