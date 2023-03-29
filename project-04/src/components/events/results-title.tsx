import { IResultsTitleProps } from '@/common/types';
import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props: IResultsTitleProps) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button type='button' link='/events'>
        Show all events
      </Button>
    </section>
  );
}

export default ResultsTitle;
