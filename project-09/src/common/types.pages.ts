import { IPost, IPostData } from './types';

export interface IHomePageProps {
  posts: IPost[];
}

export interface IAllPostsPageProps {
  posts: IPost[];
}

export interface IPostDetailsPageProps {
  post: IPostData;
}
