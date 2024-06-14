import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal/Modal";
import { LoginFormLazy } from "../LoginForm/LoginFormLazy";
import { Loader } from "@/shared/ui/Loader/Loader";

interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = ({ opened, onClose, className }: LoginModalProps) => {
  return (
    <Modal
      className={classNames("", [className])}
      opened={opened}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
