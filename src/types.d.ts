export interface IPost {
  title: string;
  link: string;
  img: string;
  category: string;
  service: string;
  objectId: number;
  date: string;
  dateTime: string;
  summary: string;
}

export type PostsState = false | Array<IPost>;

export interface IGridStyles {
  small: string[];
  medium: string[];
  large: string[];
  extraLarge: string[];
}
