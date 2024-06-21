import { CSSProperties, memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Skeleton.module.scss";

const cx = classNamesBind(s);

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export const Skeleton = memo(function Skeleton({
  width,
  height,
  borderRadius,
  className,
}: SkeletonProps) {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div
      className={cx("Skeleton", [className, "skeleton-gradient"])}
      style={style}
    />
  );
});
