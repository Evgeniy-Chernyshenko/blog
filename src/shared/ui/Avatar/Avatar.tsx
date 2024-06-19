import { CSSProperties, useMemo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Avatar.module.scss";

const cx = classNamesBind(s);

interface AvatarProps {
  className?: string;
  alt?: string;
  src?: string;
  size?: number;
}

export const Avatar = ({
  className,
  alt = "",
  src,
  size = 100,
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
    }),
    [size],
  );

  if (!src) {
    return null;
  }

  return (
    <img
      className={cx("Avatar", [className])}
      style={style}
      alt={alt}
      src={src}
    />
  );
};
