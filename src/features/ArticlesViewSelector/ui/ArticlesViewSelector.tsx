import { memo, useCallback } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesViewSelector.module.scss";
import { Button } from "@/shared/ui/Button";
import GridIcon from "@/shared/assets/icons/grid-icon.svg";
import ListIcon from "@/shared/assets/icons/list-icon.svg";
import { ViewType } from "../model/types/viewType";
import { ArticleView } from "@/entities/Article";

const cx = classNamesBind(s);

interface ArticlesViewSelectorProps {
  view: ArticleView;
  onChange: (view: ArticleView) => void;
  className?: string;
}

const viewTypes: ViewType[] = [
  {
    Icon: GridIcon,
    type: "grid",
  },
  {
    Icon: ListIcon,
    type: "list",
  },
];

export const ArticlesViewSelector = memo(function ArticlesViewSelector({
  view,
  onChange,
  className,
}: ArticlesViewSelectorProps) {
  const handleChangeView = useCallback(
    (view: ArticleView) => () => {
      onChange(view);
    },
    [onChange],
  );

  return (
    <div className={cx("ArticlesViewSelector", [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.type}
          onClick={handleChangeView(viewType.type)}
          className={cx("button", { active: viewType.type === view })}
          theme="clear"
        >
          <viewType.Icon className={cx("icon")} />
        </Button>
      ))}
    </div>
  );
});
