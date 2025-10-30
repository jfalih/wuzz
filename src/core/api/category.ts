import request from '@core/http/request';
import {activityUrl} from '@core/http/url';
import { FetchCategoryResponse } from './category.types';

export const categories = (): Promise<FetchCategoryResponse> => {
  return request(activityUrl('/categories'));
};
