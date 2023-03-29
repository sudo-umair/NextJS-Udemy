import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-util';
import { type IHomePageProps } from '@/common/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
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
