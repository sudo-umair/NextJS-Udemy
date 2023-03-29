import Head from 'next/head';
import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-util';
import { type IHomePageProps } from '@/common/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      <Head>
        <title>NextJS Events by Umair</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};
