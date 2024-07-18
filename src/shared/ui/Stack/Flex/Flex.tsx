import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Flex.module.scss";

const cx = classNamesBind(s);

type FlexDirection = "row" | "column";
type FlexJustify = "start" | "center" | "end" | "between";
type FlexAlign = "start" | "center" | "end" | "between";
type FlexGap = 0 | 4 | 8 | 16 | 32;

const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
  between: s.alignBetween,
};

export interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  children: ReactNode;
  fullwidth?: boolean;
}

export const Flex = ({
  className,
  direction = "row",
  justify = "start",
  align = direction === "column" ? "start" : "center",
  gap = 16,
  children,
  fullwidth = false,
  style,
  ...restProps
}: FlexProps) => {
  return (
    <div
      className={cx("Flex", { fullwidth }, [
        className,
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
      ])}
      style={{ ...style, gap }}
      {...restProps}
    >
      {children}
    </div>
  );
};
