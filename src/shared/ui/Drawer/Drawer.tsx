import { memo, ReactNode, useCallback, useEffect } from "react";
// import { useDrag } from "@use-gesture/react";
// import { a, useSpring, config } from "@react-spring/web";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import {
  AnimationProvider,
  useAnimationModules,
} from "@/shared/lib/components/AnimationProvider";
import { Theme } from "@/shared/constants/theme";
import { useTheme } from "@/shared/lib/hooks/useTheme";

const cx = classNamesBind(s);

interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  theme?: Theme;
  onClose: () => void;
  onShow?: () => void;
}

const height = window.innerHeight * 0.8;

export const DrawerInner = memo(function DrawerInner({
  isOpen,
  children,
  className,
  theme,
  onClose,
  onShow,
}: DrawerProps) {
  const {
    Gesture: { useDrag },
    Spring: { a, useSpring, config },
  } = useAnimationModules();
  const { theme: currentTheme } = useTheme();
  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    openDrawer();
  }, [api, isOpen, openDrawer]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    requestAnimationFrame(() => {
      onShow?.();
    });
  }, [isOpen, onShow]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) {
        cancel();
      }

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? "flex" : "none"));

  return (
    <Portal>
      <Overlay onClose={close}>
        <a.div
          data-theme={theme ?? currentTheme}
          className={cx("Drawer", [className])}
          style={{ display, bottom: 0, y }}
          {...bind()}
        >
          <div className={cx("content")}>{children}</div>
        </a.div>
      </Overlay>
    </Portal>
  );
});

const DrawerAsync = memo(function DrawerAsync(props: DrawerProps) {
  const { isLoaded } = useAnimationModules();

  if (!isLoaded) {
    return null;
  }

  return <DrawerInner {...props} />;
});

export const Drawer = memo(function Drawer(props: DrawerProps) {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
});
