import { HTMLAttributes, memo, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Card.module.scss";

const cx = classNamesBind(s);

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = memo(function Card({ className, ...restProps }: CardProps) {
  return <div className={cx("Card", [className])} {...restProps} />;
});
