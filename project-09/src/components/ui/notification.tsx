import React from 'react';
import classes from './notification.module.css';
import { INotificationProps } from '@/common/types.components';
import ReactDOM from 'react-dom';

function Notification(props: INotificationProps) {
  if (!props.notification) {
    return null;
  }

  const { title, message, status } = props.notification;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  // return (
  //   <div className={cssClasses}>
  //     <h2>{title}</h2>
  //     <p>{message}</p>
  //   </div>
  // );

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')!
  );
}

export default Notification;
