import React, { Fragment } from 'react';
import { getAllEvents } from '@/helpers/api-util';
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IAllEventsPageProps } from '@/common/types';

export default function AllEventsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  const { events } = props;

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

export const getStaticProps: GetStaticProps<IAllEventsPageProps> = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
