import request from '@http/request';
import { userUrl } from '@http/url';
import { BaseListParams } from '@core/http/response';
import { FetchGearResponse, FetchMaterialResponse, FetchVariantResponse } from './avatar.types';

/**
 * * Fetches the list of gears. * @param params - The parameters for the request.
 * @returns A promise that resolves to the response data.
 */

export const gear = (): Promise<FetchGearResponse> => {
  return request(userUrl('/gears'));
};

export const gearByID = (id: number): Promise<FetchGearResponse> => {
  return request(userUrl(`/gear/${id}`));
};

/**
 * * Fetches the list of variants. * @param params - The parameters for the request.
 * @returns A promise that resolves to the response data.
 */
export const variant = (params: BaseListParams): Promise<FetchVariantResponse> => {
  return request(userUrl('/variants', params));
};

export const variantByGearID = (id: number): Promise<FetchVariantResponse> => {
  return request(userUrl(`/variants/gear/${id}`));
};

/**
 * * Fetches the list of materials. * @param params - The parameters for the request.
 * @returns A promise that resolves to the response data.
 */

export const material = (params: BaseListParams): Promise<FetchMaterialResponse> => {
  return request(userUrl('/activities', params));
};

export const materialByVariantID = (id: number): Promise<FetchMaterialResponse> => {
  return request(userUrl(`/materials/variants/${id}`));
};
