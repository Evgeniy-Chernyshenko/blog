import { useEffect, useRef } from "react";

export const useInitialEffect = (callback: () => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callbackRef.current();
    }
  }, [callbackRef]);
};
