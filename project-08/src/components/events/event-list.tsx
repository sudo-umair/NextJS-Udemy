import { IEventListProps } from '@/common/types';
import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props: IEventListProps) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          description={event.description}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
}

export default EventList;
