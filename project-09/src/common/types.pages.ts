import { IPostData } from './types';

export interface IHomePageProps {
  posts: IPostData[];
}

export interface IAllPostsPageProps {
  posts: IPostData[];
}

export interface IPostDetailsPageProps {
  post: IPostData;
}
