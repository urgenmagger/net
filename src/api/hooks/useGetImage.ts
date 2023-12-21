import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Photo } from 'common/types';
import { imageService } from '../services/images.service';

const fetchPhotos = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  const response = await imageService.get(page, perPage);
  return response.data;
};

export const useGetImage = (
  page: number,
  perPage: number,
  options?: UseQueryOptions<any>,
) => {
  return useQuery<Photo[], any>({
    queryKey: ['photos', page, perPage],
    queryFn: () => fetchPhotos({ page, perPage }),
    ...options,
  });
};
