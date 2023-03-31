import { ButtonHTMLAttributes, ReactNode } from 'react';

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

export interface IEventItemProps extends IEvent {
  key: string;
}

export interface IEventContentProps {
  children: ReactNode;
}

export interface IButtonProps {
  link?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  children: ReactNode;
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
  children: ReactNode;
}

export interface IEventsSearchProps {
  onSearch: (year: string, month: string) => void;
}

export interface IResultsTitleProps {
  date: Date;
}

export interface IErrorAlertProps {
  children: ReactNode;
}

export interface IDateFilter {
  year: number;
  month: number;
}

export interface ILayoutProps {
  children: ReactNode;
}

export interface IComment {
  _id?: string;
  name: string;
  email: string;
  text: string;
}

export interface ICommentsProps {
  eventId: string;
}

export interface INewCommentProps {
  onAddComment: (commentData: IComment) => void;
}

export interface ICommentsListProps {
  comments: IComment[];
}
