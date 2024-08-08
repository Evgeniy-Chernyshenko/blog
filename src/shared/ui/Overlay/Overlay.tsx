import {
  CSSProperties,
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Overlay.module.scss";

const cx = classNamesBind(s);

interface OverlayProps {
  children: ReactNode;
  className?: string;
  onClose: (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => void;
  style?: CSSProperties;
}

export const Overlay = memo(function Overlay({
  children,
  className,
  onClose,
  style,
}: OverlayProps) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(e);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onClose]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) {
        return;
      }

      onClose(e);
    },
    [onClose],
  );

  return (
    <div
      className={cx("Overlay", [className])}
      onClick={handleClick}
      style={style}
    >
      {children}
    </div>
  );
});
