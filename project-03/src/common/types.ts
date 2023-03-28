export interface IProduct {
  id: string;
  title: string;
  description: string;
}

export interface IHomePageProps {
  products: IProduct[];
}

export interface IProductPageProps {
  loadedProduct: IProduct | undefined;
}

export interface IUserProfilePageProps {
  username: string;
}

export interface IUserIdPageProps {
  userId: string;
}

export interface ISale {
  id: string;
  username: string;
  volume: number;
}
