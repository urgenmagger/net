import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { imageService } from '../services/images.service';

interface ReturnHook {
  error?: unknown;
  isLoading?: boolean;
  refetch?: () => void;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  data: InfiniteData<any, unknown> | undefined;
}

export const useGetImages = (): ReturnHook => {
  const fetchPhotos = async ({ pageParam = 0 }) => {
    try {
      const response = await imageService.get(pageParam);

      if (!response) {
        throw new Error('Failed to fetch data');
      }

      const paginationLinks = response.headers.link;

      // Check if paginationLinks is defined before splitting
      const links = paginationLinks ? paginationLinks.split(', ') : [];
      let nextPage = null;

      // Find link for the next page
      links.forEach(link => {
        if (link.includes('rel="next"')) {
          nextPage = link.split('; ')[0].slice(1, -1);
        }
      });

      console.log('urgen nextPage', nextPage);
      return {
        data: response?.data,
        nextPage,
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
