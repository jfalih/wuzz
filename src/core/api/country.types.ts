import { ApiResponse } from '@core/http/response';

export interface Country {
    id: number
    iso: string
    name: string
    nicename: string
    iso3: string
    numcode: number
    calling_code: number
    created_at: string
    updated_at: string
}

export type FetchCountryResponse = ApiResponse<Country[]>;
export type FetchCountryISOResponse = ApiResponse<Country>;
