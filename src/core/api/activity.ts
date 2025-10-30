import request from '@http/request';
import api from '@http/url';
import { ActivitiesResponse } from './activity.types';
import { BaseListParams } from '@core/http/response';

export const activities = (params: BaseListParams): Promise<ActivitiesResponse> => {
  return request(api('/activities', params));
};

export const activity = (id: number) => {
  return request(api(`/activity/${id}`));
};
