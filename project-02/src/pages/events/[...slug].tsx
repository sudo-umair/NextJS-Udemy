import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { getFilteredEvents } from '../../../dummy-data';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import ErrorAlert from '@/components/ui/error-alert';
import Button from '@/components/ui/button';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>Loading...</p>
        </ErrorAlert>
        <div className='center'>
          <Button type='button' link='/events'>
            Show All Events
          </Button>
        </div>
      </Fragment>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button type='button' link='/events'>
            Show All Events
          </Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button type='button' link='/events'>
            Show All Events
          </Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  );
}
