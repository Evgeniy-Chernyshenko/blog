import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal/Portal";

const cx = classNamesBind(s);

interface ModalProps {
  opened: boolean;
  onClose?: () => void;
  className?: string;
  children: ReactNode;
}

const ANIMATION_DURATION = 250;

export const Modal = ({ opened, onClose, className, children }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const animationStateRef = useRef<{ opened: boolean; isClosing: boolean }>({
    opened,
    isClosing,
  });

  useEffect(() => {
    animationStateRef.current = { opened, isClosing };
  }, [opened, isClosing]);

  const close = useCallback(() => {
    if (
      !animationStateRef.current.opened ||
      animationStateRef.current.isClosing
    ) {
      return;
    }

    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      setIsClosing(false);

      if (onClose) {
        onClose();
      }
    }, ANIMATION_DURATION);
  }, [onClose]);

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [close]);

  return (
    <Portal>
      <div
        className={cx("Modal", { opened, closing: isClosing }, [className])}
        onClick={handleClose}
      >
        <div className={cx("content-container")}>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
