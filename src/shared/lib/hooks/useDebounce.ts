import { useCallback, useRef } from "react";

export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number = 500,
) => {
  const timeoutId = useRef<number>();

  return useCallback(
    (...args: T) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = Number(
        setTimeout(() => {
          callback(...args);
        }, delay),
      );
    },
    [callback, delay],
  );
};
