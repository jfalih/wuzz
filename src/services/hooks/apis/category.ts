import {categories} from '@api/category';
import {ErrorResponse} from '@http/response';
import {createQueryKeyStore} from '@lukemorales/query-key-factory';
import {useQuery} from '@tanstack/react-query';
import { FetchCategoryResponse } from '@core/api/category.types';

export const categoryQueryKeys = createQueryKeyStore({
  categories: {
    fetch: () => ({
      queryKey: ['fetchCategories'],
      queryFn: () => categories(), // Define the queryFn here
    }),
  },
});

export const useFetchCategories = () => {
    return useQuery<
        FetchCategoryResponse,
        ErrorResponse<null>,
        FetchCategoryResponse['data'],
        any
    >({
        ...categoryQueryKeys.categories.fetch(),
        select: data => data.data,
    });
};
