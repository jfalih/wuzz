// @ts-nocheck

import { activities, activity } from '@api/activity';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { useInfiniteQuery } from '@tanstack/react-query';

export const activityQueryKeys = createQueryKeyStore({
    activity: {
        getActivities: (num: number, cursor?: string) => ({
            queryKey: ['getCountries', num, cursor],
            queryFn: ({ pageParam = cursor }) => activities({ num, cursor: pageParam }), // Define the queryFn here
        }),
        getActivity: (id: number) => ({
            queryKey: ['getActivity', id],
            queryFn: () => activity(id), // Define the query
        }),
    },
});

export const useActivities = (num: number, cursor?: string) => {
    return useInfiniteQuery({
        ...activityQueryKeys.activity.getActivities(num, cursor),
        select: (data) => {
            return data.pages.flatMap((page) => page.data?.activities);
        },
        getNextPageParam: (lastPage) => {
            return lastPage.data.next;
        }, // Adjust according to your API response
        enabled: !!num,
    });
};
