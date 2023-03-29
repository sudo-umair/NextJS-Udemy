import { IErrorAlertProps } from '@/common/types';
import React, { PropsWithChildren } from 'react';
import classes from './error-alert.module.css';

const ErrorAlert: React.FC<PropsWithChildren<IErrorAlertProps>> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
