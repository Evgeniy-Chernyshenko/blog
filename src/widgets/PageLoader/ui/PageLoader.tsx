import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./PageLoader.module.scss";
import { Loader } from "@/shared/ui/Loader";

const cx = classNamesBind(s);

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cx("PageLoader", [className])}>
      <Loader />
    </div>
  );
};
