import { RefObject, useEffect } from "react";

export const useInfiniteScroll = (
  targetRef: RefObject<HTMLElement>,
  callback?: () => void,
) => {
  useEffect(() => {
    const targetElement = targetRef.current;

    if (!targetElement || !callback) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      callback();
    });

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [callback, targetRef]);
};
