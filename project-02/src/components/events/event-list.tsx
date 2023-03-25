import React from 'react';
import { type IEventListProps, IEvent } from '@/common/types';
import EventItem from './event-item';
import styles from './event-list.module.css';

export default function EventList(props: IEventListProps) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((event: IEvent) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
