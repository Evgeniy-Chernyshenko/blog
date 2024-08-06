import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./NotificationsButton.module.scss";
import { Popover } from "@/shared/ui/Popups/ui/Popover/Popover";
import { Button } from "@/shared/ui/Button/Button";
import { NotificationList } from "@/entities/Notifications";
import NotificationIcon from "@/shared/assets/icons/notification-icon.svg";

const cx = classNamesBind(s);

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(function NotificationsButton({
  className,
}: NotificationsButtonProps) {
  return (
    <Popover
      trigger={
        <Button theme="clear">
          <NotificationIcon className={cx("notifications-icon")} />
        </Button>
      }
      content={<NotificationList className={cx("notification-list")} />}
      direction="rightBottom"
      className={cx("", [className])}
    />
  );
});
