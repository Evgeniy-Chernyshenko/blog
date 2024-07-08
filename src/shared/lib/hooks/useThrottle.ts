import { useCallback, useEffect, useRef } from "react";

export const useThrottle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number = 500,
) => {
  const throttleRef = useRef(false);
  const timeoutIdRef = useRef<number | undefined>();

  useEffect(() => {
    return () => clearTimeout(timeoutIdRef.current);
  }, []);

  return useCallback(
    (...args: T) => {
      if (!throttleRef.current) {
        callback(...args);

        throttleRef.current = true;

        timeoutIdRef.current = Number(
          setTimeout(() => {
            throttleRef.current = false;
          }, delay),
        );
      }
    },
    [delay, callback],
  );
};
