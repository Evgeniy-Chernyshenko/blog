import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

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
      <LoginForm />
    </Modal>
  );
};
