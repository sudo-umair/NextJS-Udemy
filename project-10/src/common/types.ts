export interface IPost {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
}

export interface IPostData extends IPost {
  slug: string;
  content: string;
}

export interface IMessage {
  name: string;
  email: string;
  message: string;
}

export interface INotification {
  status: 'success' | 'error' | 'pending';
  title: string;
  message: string;
}
