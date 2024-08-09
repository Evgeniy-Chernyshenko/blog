import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextValue {
  Spring?: SpringType;
  Gesture?: GestureType;
  isLoaded?: boolean;
}

const getAsyncAnimationModules = () =>
  Promise.all([import("@react-spring/web"), import("@use-gesture/react")]);

const AnimationContext = createContext<AnimationContextValue>({});

export const AnimationProvider = ({ children }: PropsWithChildren) => {
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      [SpringRef.current, GestureRef.current] =
        await getAsyncAnimationModules();

      setIsLoaded(true);
    })();
  }, []);

  const value = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationModules = () =>
  useContext(AnimationContext) as Required<AnimationContextValue>;
