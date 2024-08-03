import { memo, useCallback } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Tabs.module.scss";
import { Card } from "../Card/Card";

const cx = classNamesBind(s);

export interface TabItem<T extends string | number> {
  value: T;
  text: string;
}

interface TabsProps<T extends string | number> {
  tabItems: TabItem<T>[];
  value: string;
  onChange: (value: T) => void;
  className?: string;
}

export const Component = function Tabs<T extends string | number>({
  tabItems,
  value,
  onChange,
  className,
}: TabsProps<T>) {
  const handleTabItemClick = useCallback(
    (value: T) => () => {
      onChange(value);
    },
    [onChange],
  );

  return (
    <div className={cx("Tabs", [className])}>
      {tabItems.map((tabItem) => {
        return (
          <Card
            className={cx("tabItem")}
            key={tabItem.value}
            theme={tabItem.value === value ? "normal" : "outlined"}
            onClick={handleTabItemClick(tabItem.value)}
          >
            {tabItem.text}
          </Card>
        );
      })}
    </div>
  );
};

export const Tabs = memo(Component) as typeof Component;
