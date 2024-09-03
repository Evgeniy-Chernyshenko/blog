import { CSSProperties, useMemo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Avatar.module.scss";
import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton";
import AvatarFallback from "../../assets/icons/avatar-fallback.svg";

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
    <AppImage
      className={cx("Avatar", [className])}
      style={style}
      alt={alt}
      src={src}
      fallback={<Skeleton width={40} height={40} borderRadius="50%" />}
      errorFallback={
        <AvatarFallback
          style={{
            color: "var(--inverted-primary-color)",
            display: "block",
            width: 40,
            height: 40,
          }}
        />
      }
    />
  );
};
