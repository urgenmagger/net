import axios, { AxiosResponse } from 'axios';

import { Photo } from 'common/types';
import { API_URL, TOKEN } from 'common/C';

export const getImageByIdService = {
  async get(id: string): Promise<Photo> {
    const response: AxiosResponse<Photo> = await axios.get<Photo>(
      `${API_URL}/${id}`,
      {
        headers: {
          'app-id': TOKEN,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  },
};
