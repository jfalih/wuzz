import { moods } from '@core/api/mood';
import { FetchMoodResponse } from '@core/api/mood.types';
import {ErrorResponse} from '@http/response';
import {createQueryKeyStore} from '@lukemorales/query-key-factory';
import {useQuery} from '@tanstack/react-query';

export const moodQueryKeys = createQueryKeyStore({
  mood: {
    fetch: () => ({
      queryKey: ['fetchMoods'],
      queryFn: moods, // Define the queryFn here
    }),
  },
});

export const useFetchMoods = () => {
    return useQuery<
        FetchMoodResponse,
        ErrorResponse<null>,
        FetchMoodResponse['data'],
        readonly ['mood', 'fetch', string]
    >({
        ...moodQueryKeys.mood.fetch(),
        select: data => data.data ?? [],
    });
};
