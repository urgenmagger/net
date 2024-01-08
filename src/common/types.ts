import { AxiosResponse } from 'axios';

interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface Photo {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: Owner;
}

export interface ImageApiResponse {
  data: Photo[];
  total: number;
  page: number;
  limit: number;
}

export interface ImageServiceResponse {
  data: AxiosResponse<ImageApiResponse>;
}
