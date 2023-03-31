import type { IEvent } from './types';

export interface IHomePageProps {
  featuredEvents: IEvent[];
}

export interface IEventDetailsPageProps {
  selectedEvent: IEvent | undefined;
}

export interface IAllEventsPageProps {
  events: IEvent[];
}

export interface IFilteredEventsPageProps {
  date: {
    year: number;
    month: number;
  };
  filteredEvents: IEvent[];
  hasError: boolean;
}
