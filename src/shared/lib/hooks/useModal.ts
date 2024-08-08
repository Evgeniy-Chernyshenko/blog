import { useCallback, useEffect, useRef, useState } from "react";

interface UseModalProps {
  isOpen: boolean;
  animationDuration: number;
  onClose?: () => void;
}

export const useModal = ({
  isOpen,
  animationDuration,
  onClose,
}: UseModalProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const animationStateRef = useRef<{
    isOpen: boolean;
    isOpening: boolean;
    isClosing: boolean;
  }>({
    isOpen,
    isOpening,
    isClosing,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    animationStateRef.current = { isOpen, isOpening, isClosing };
  }, [isOpen, isOpening, isClosing]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsMounted(true);
    setIsOpening(true);
    setIsClosed(false);

    const timer = setTimeout(() => {
      setIsOpening(false);
      setIsOpened(true);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [animationDuration, isOpen]);

  const close = useCallback(() => {
    if (
      !animationStateRef.current.isOpen ||
      animationStateRef.current.isOpening ||
      animationStateRef.current.isClosing
    ) {
      return;
    }

    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      setIsClosing(false);
      setIsClosed(true);
      setIsOpened(false);

      if (onClose) {
        onClose();
      }
    }, animationDuration);
  }, [animationDuration, onClose]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [close]);

  return { isOpening, isOpened, isMounted, close, isClosing, isClosed };
};
