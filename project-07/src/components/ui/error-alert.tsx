import { IErrorAlertProps } from '@/common/types';
import classes from './error-alert.module.css';

function ErrorAlert(props: IErrorAlertProps) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
