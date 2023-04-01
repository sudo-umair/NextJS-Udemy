import { IEventContentProps } from '@/common/types';
import classes from './event-content.module.css';

function EventContent(props: IEventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
