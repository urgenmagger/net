import { useQuery } from '@tanstack/react-query';

import { Photo } from 'common/types';
import { getImageByIdService } from 'api/services/getImageById.service';

interface ReturnHook {
  data?: Photo;
  isLoading?: boolean;
  error?: unknown;
  isError?: boolean;
}
export const useGetImageById = (id: string): ReturnHook => {
  const { isLoading, data, error, isError } = useQuery<Photo, unknown>({
    queryKey: ['image', id],
    queryFn: async () => {
      const response = await getImageByIdService.get(id);
      return response;
    },
  });

  return { data, isLoading, error, isError };
};
