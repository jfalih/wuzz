// @ts-nocheck

import { countries, country } from '@api/country';
import { FetchCountryISOResponse } from '@core/api/country.types';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const countryQueryKeys = createQueryKeyStore({
    country: {
        getCountries: (num: number, search?: string, cursor?: string) => ({
            queryKey: ['getCountries', num, search, cursor],
            queryFn: ({ pageParam = cursor }) => countries({ num, cursor: pageParam, search }), // Define the queryFn here
        }),
        getCountry: (code: string) => ({
            queryKey: ['getCountry', code],
            queryFn: () => country(code), // Define the query
        }),
    },
});

export const useCountries = (num: number, search?: string, cursor?: string) => {
    return useInfiniteQuery({
        ...countryQueryKeys.country.getCountries(num, search, cursor),
        select: (data) => {
            return data.pages.flatMap((page) => page.data.countries);
        },
        getNextPageParam: (lastPage) => {
            // If next is null, stop fetching further pages
            if (!lastPage.data.next) {
                return undefined;
            }
            return lastPage.data.next;
        }, // Adjust according to your API response
        enabled: !!num,
    });
};

export const useCountry = (code: string) => {
    return useQuery<
            FetchCountryISOResponse,
            ErrorResponse<null>,
            FetchCountryISOResponse['data'],
            any
        >({
        ...countryQueryKeys.country.getCountry(code),
        select: (data) => {
            return data.data;
        },
        enabled: !!code,
    });
};

