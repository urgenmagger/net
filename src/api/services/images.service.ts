import axios from 'axios';
import { API_KEY, API_URL } from '../../common/C';

export const imageService = {
  async get(page: number) {
    return axios.get(API_URL, {
      params: {
        page: page,
        client_id: API_KEY,
      },
    });
  },
};
