import { memo, Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormLazy } from "../LoginForm/LoginFormLazy";
import { Loader } from "@/shared/ui/Loader";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = memo(function LoginModal({
  isOpen,
  onClose,
  className,
}: LoginModalProps) {
  return (
    <Modal
      className={classNames("", [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
