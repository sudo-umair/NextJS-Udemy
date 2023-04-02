import { INotification, IPost, IPostData } from './types';

export interface IPostItemProps {
  post: IPost;
}

export interface IPostGridProps {
  posts: IPost[];
}

export interface IFeaturedPostsProps {
  posts: IPost[];
}

export interface IAllPostsProps {
  posts: IPost[];
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
