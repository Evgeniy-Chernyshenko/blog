import { memo } from "react";
import { classNames as cx } from "@/shared/lib/classNames/classNames";
import { useGetNotificationsQuery } from "../../api/notificationsApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(function NotificationList({
  className,
}: NotificationListProps) {
  const { isLoading, data } = useGetNotificationsQuery(undefined, {
    pollingInterval: 5000,
  });

  return (
    <VStack gap={16} className={cx("", [className])}>
      {isLoading &&
        [...Array(3)].map((_, index) => (
          <Skeleton key={index} borderRadius={10} height={86} />
        ))}

      {!isLoading &&
        data &&
        data.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
    </VStack>
  );
});
