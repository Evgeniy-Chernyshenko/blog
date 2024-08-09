import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./NotificationsButton.module.scss";
import { Popover } from "@/shared/ui/Popups/ui/Popover/Popover";
import { Button } from "@/shared/ui/Button/Button";
import { NotificationList } from "@/entities/Notifications";
import NotificationIcon from "@/shared/assets/icons/notification-icon.svg";
import { Theme } from "@/app/providers/ThemeProvider";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider";

const cx = classNamesBind(s);

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(function NotificationsButton({
  className,
}: NotificationsButtonProps) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const TriggerComponent = (
    <Button theme="clear" onClick={handleOpenDrawer}>
      <NotificationIcon className={cx("notifications-icon")} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          trigger={TriggerComponent}
          content={<NotificationList className={cx("notification-list")} />}
          direction="rightBottom"
          className={cx("popover", [className])}
        />
      </BrowserView>

      <MobileView>
        {TriggerComponent}

        <AnimationProvider>
          <Drawer
            onClose={handleCloseDrawer}
            isOpen={isOpenDrawer}
            theme={Theme.DARK}
          >
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
});
