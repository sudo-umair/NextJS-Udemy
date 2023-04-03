import { INotification, IPostData } from './types';

export interface IPostItemProps {
  post: IPostData;
}

export interface IPostGridProps {
  posts: IPostData[];
}

export interface IFeaturedPostsProps {
  posts: IPostData[];
}

export interface IAllPostsProps {
  posts: IPostData[];
}

export interface IPostHeaderProps {
  title: string;
  image: string;
}

export interface IPostContentProps {
  post: IPostData;
}

export interface INotificationProps {
  notification: INotification | null;
}
