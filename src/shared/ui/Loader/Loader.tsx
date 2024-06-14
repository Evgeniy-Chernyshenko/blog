import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Loader.module.scss";

const cx = classNamesBind(s);

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <span className={cx("Loader", [className])}>
      <span className={cx("item")} />
    </span>
  );
};
