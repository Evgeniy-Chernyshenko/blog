import { useLayoutEffect, useRef } from "react";

export const useInitialLayoutEffect = (callback: () => void) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callbackRef.current();
    }
  }, [callbackRef]);
};
