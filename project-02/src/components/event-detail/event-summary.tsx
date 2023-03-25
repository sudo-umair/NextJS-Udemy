import classes from './event-summary.module.css';
import { type IEventSummaryProps } from '@/common/types';

function EventSummary(props: IEventSummaryProps) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
