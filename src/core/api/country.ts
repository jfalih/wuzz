import request from '@http/request';
import {authUrl} from '@http/url';
import { BaseListParams } from '@core/http/response';
import { FetchCountryISOResponse } from './country.types';

export const countries = (params: BaseListParams) => {
  return request(authUrl('/countries', params));
};

export const country = (code: string): Promise<FetchCountryISOResponse> => {
  return request(authUrl(`/country/${code}/iso`));
};
