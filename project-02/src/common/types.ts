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
