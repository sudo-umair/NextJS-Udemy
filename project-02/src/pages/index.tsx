import EventList from '@/components/events/event-list';
import styles from '@/styles/Home.module.css';
import { getFeaturedEvents } from '../../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
