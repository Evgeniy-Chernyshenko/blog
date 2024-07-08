import { memo, ReactNode, UIEvent, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { pageWrapperActions } from "../../model/slice/pageWrapperSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getPageWrapperScrollByPath } from "../../model/selectors/pageWrapper";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useInitialLayoutEffect } from "@/shared/lib/hooks/useInitialLayoutEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle";
import s from "./PageWrapper.module.scss";

const cx = classNamesBind(s);

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export const PageWrapper = memo(function PageWrapper({
  children,
  className,
  onScrollEnd,
}: PageWrapperProps) {
  const pageWrapperRef = useRef<HTMLDivElement>(null);
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const restoredScrollTop = useSelector((state: StateSchema) =>
    getPageWrapperScrollByPath(state, pathname),
  );

  useInfiniteScroll(scrollEndRef, onScrollEnd);

  useInitialLayoutEffect(() => {
    pageWrapperRef.current?.scrollTo({ top: restoredScrollTop });
  });

  const handleScroll = useCallback(
    (event: UIEvent) => {
      const { scrollTop } = event.currentTarget;

      dispatch(
        pageWrapperActions.setScrollPosition({ path: pathname, scrollTop }),
      );
    },
    [dispatch, pathname],
  );

  const throttledHandleScroll = useThrottle(handleScroll);

  return (
    <section
      className={cx("PageWrapper", [className])}
      onScroll={throttledHandleScroll}
      ref={pageWrapperRef}
    >
      {children}

      <div ref={scrollEndRef} />
    </section>
  );
});
