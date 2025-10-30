import request from '@core/http/request';
import { FetchMoodResponse } from './mood.types';
import { activityUrl } from '@core/http/url';

export const moods = (): Promise<FetchMoodResponse> => {
  return request(activityUrl('/moods'));
};
