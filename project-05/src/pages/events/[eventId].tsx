import React, { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '@/helpers/api-util';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import {
  GetStaticPropsContext,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next';
import { IEvent, IEventDetailsPageProps } from '@/common/types';
import Head from 'next/head';

export default function EventDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{props.selectedEvent?.title}</title>
        <meta name='description' content={props.selectedEvent?.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  IEventDetailsPageProps,
  { eventId: string }
> = async (context: GetStaticPropsContext<{ eventId: string }>) => {
  const eventId = context.params?.eventId;
  const event = await getEventById(eventId as string);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event: IEvent) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
