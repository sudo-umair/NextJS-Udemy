import { ButtonHTMLAttributes } from 'react';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface IEventListProps {
  items: IEvent[];
}

export interface IEventItemProps extends IEvent {}

export interface IButtonProps {
  link?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}

export interface IEventSummaryProps {
  title: string;
}

export interface IEventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

export interface ILogisticsItemProps {
  icon: () => JSX.Element;
}

export interface IEventsSearchProps {
  onSearch: (year: string, month: string) => void;
}

export interface IResultsTitleProps {
  date: Date;
}

export interface IErrorAlertProps {}

// types for pages
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
