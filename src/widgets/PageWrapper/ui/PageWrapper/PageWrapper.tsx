import { memo, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./PageWrapper.module.scss";

const cx = classNamesBind(s);

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = memo(function PageWrapper({
  children,
  className,
}: PageWrapperProps) {
  return (
    <section className={cx("PageWrapper", [className])}>{children}</section>
  );
});
