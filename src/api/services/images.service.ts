import axios from 'axios';

import { API_URL, TOKEN } from 'common/C';
import { ImageApiResponse, ImageServiceResponse } from 'common/types';

export const imageService = {
  async get(page: number, limit: number): Promise<ImageServiceResponse> {
    const response = await axios.get<ImageApiResponse>(
      `${API_URL}?page=${page}&limit=${limit}`,
      {
        headers: {
          'app-id': TOKEN,
          'Content-Type': 'application/json',
        },
      },
    );

    return {
      data: response,
    };
  },
};
