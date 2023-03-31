import { Fragment } from 'react';
import Head from 'next/head';
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '../../components/input/comments';
import { IEventDetailsPageProps } from '@/common/types.pages';

function EventDetailPage(
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
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
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
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  IEventDetailsPageProps,
  {
    eventId: string;
  }
> = async (context: GetStaticPropsContext<{ eventId: string }>) => {
  const eventId = context.params?.eventId;

  const event = await getEventById(eventId as string);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
