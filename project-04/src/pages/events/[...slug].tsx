import React, { Fragment, useEffect, useState } from 'react';
import { getFilteredEvents } from '@/helpers/api-util';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import ErrorAlert from '@/components/ui/error-alert';
import Button from '@/components/ui/button';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { IEvent, IFilteredEventsPageProps } from '@/common/types';
import useSwr from 'swr';
import { useRouter } from 'next/router';

// export default function FilteredEventsPage(
//   props: InferGetServerSidePropsType<typeof getServerSideProps>
// ) {
//   if (props.hasError) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p className='center'>Invalid filter. Please adjust your values!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button type='button' link='/events'>
//             Show All Events
//           </Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const events = props.filteredEvents;

//   if (!events || events.length === 0) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p className='center'>No events found for the chosen filter!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button type='button' link='/events'>
//             Show All Events
//           </Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const date = new Date(props.date.year, props.date.month - 1);

//   return (
//     <div>
//       <ResultsTitle date={date} />
//       <EventList items={events} />
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps<
//   IFilteredEventsPageProps,
//   { slug: string[] }
// > = async (context: GetServerSidePropsContext<{ slug: string[] }>) => {
//   const { params } = context;

//   const filterData = params?.slug;

//   const filteredYear = filterData?.[0];
//   const filteredMonth = filterData?.[1];

//   const numYear = +filteredYear!;
//   const numMonth = +filteredMonth!;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//         filteredEvents: [],
//         date: {
//           year: new Date().getFullYear(),
//           month: new Date().getMonth() + 1,
//         },
//       },
//     };
//   }

//   const events = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       hasError: false,
//       filteredEvents: events,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// };

/* The code below is the same as the code in the previous commit, 
except that we are using the useSwr hook to fetch the data from the database. 
The useSwr hook is a React hook that is used to fetch data from the database. 
It is a wrapper around the fetch API. It takes in the URL of the database as the first argument 
and returns an object with the data and error properties. 
The data property contains the data that is fetched from the database 
and the error property contains the error that is thrown 
if there is an error while fetching the data from the database.
*/

export default function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState<IEvent[]>([]);

  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSwr(
    'https://next-js-course-885c7-default-rtdb.firebaseio.com/events.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      let events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  const filteredYear = filterData?.[0];
  const filteredMonth = filterData?.[1];

  const numYear = +filteredYear!;
  const numMonth = +filteredMonth!;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
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

  const filteredEvents = loadedEvents.filter((event: IEvent) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
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
      <EventList items={filteredEvents} />
    </div>
  );
}
