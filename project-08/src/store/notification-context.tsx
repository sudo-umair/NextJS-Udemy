import { INotification, INotificationContext } from '@/common/types';
import React, { PropsWithChildren, useState, createContext } from 'react';

export const NotificationContext = createContext<INotificationContext>({
  notification: null, // { title, message, status }
  showNotification: function (notificationData: INotification) {},
  hideNotification: function () {},
});

export const NotificationContextProvider: React.FC<PropsWithChildren> = (
  props
) => {
  const [activeNotification, setActiveNotification] =
    useState<INotification | null>(null);

  function showNotificationHandler(notificationData: INotification) {
    setActiveNotification(notificationData);

    setTimeout(() => {
      setActiveNotification(null);
    }, 3000);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context: INotificationContext = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
