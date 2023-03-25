import React, { Fragment } from 'react';
import { getAllEvents } from '../../../dummy-data';
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { useRouter } from 'next/router';

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />{' '}
    </Fragment>
  );
}
