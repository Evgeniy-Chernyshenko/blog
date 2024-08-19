import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notification";
import { Card } from "@/shared/ui/Card";
import { TextBlock } from "@/shared/ui/TextBlock";

const cx = classNamesBind(s);

interface NotificationItemProps {
  notification: Notification;
  className?: string;
}

export const NotificationItem = memo(function NotificationItem({
  notification,
  className,
}: NotificationItemProps) {
  const CardComponent = (
    <Card className={cx("notification-item", [className])} theme="outlined">
      <TextBlock title={notification.title} text={notification.description} />
    </Card>
  );

  return notification.link ? (
    <a
      href={notification.link}
      target="_blank"
      rel="noreferrer"
      className={cx("notification-link")}
    >
      {CardComponent}
    </a>
  ) : (
    CardComponent
  );
});
