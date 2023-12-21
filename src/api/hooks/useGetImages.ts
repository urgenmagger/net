import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import { LIMIT } from 'common/C';
import { ImageApiResponse } from 'common/types';
import { imageService } from '../services/images.service';

interface ReturnHook {
  error?: unknown;
  isLoading?: boolean;
  refetch?: () => void;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  data: InfiniteData<ImageApiResponse, unknown> | undefined;
}

export const useGetImages = (): ReturnHook => {
  const fetchPhotos = async ({ pageParam = 1 }) => {
    try {
      const response = await imageService.get(pageParam, LIMIT);

      const totalItems = response?.data?.data?.total || 0;
      const limitPerPage = response?.data?.data?.limit || 1;
      const currentPage = response?.data?.data?.page || 0;

      const nextPage =
        Math.ceil(totalItems / limitPerPage) > currentPage
          ? currentPage + 1
          : null;

      return {
        data: response?.data?.data?.data,
        nextPage,
        total: totalItems,
        page: currentPage,
        limit: limitPerPage,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const { data, isFetchingNextPage, isLoading, fetchNextPage, refetch, error } =
    useInfiniteQuery({
      queryKey: ['id'],
      queryFn: fetchPhotos,
      getNextPageParam: lastPage => {
        const nextPage = lastPage.nextPage;
        return nextPage;
      },
      initialPageParam: 0,
    });

  const enhancedFetchNextPage = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    data,
    error,
    refetch,
    isLoading,
    fetchNextPage: enhancedFetchNextPage,
    isFetchingNextPage,
  };
};
