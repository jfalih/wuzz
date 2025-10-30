import request from '@core/http/request';
import { userUrl } from '@core/http/url';
import { ConfirmSurveyBodyDTO, ConfirmSurveyResponse, FetchSurveyResponse } from './survey.types';

export const surveys = (): Promise<FetchSurveyResponse> => {
  return request(userUrl('/surveys'));
};

export const confirmSurvey = (data: ConfirmSurveyBodyDTO): Promise<ConfirmSurveyResponse> => {
  return request(userUrl('/surveys/confirm'), { method: 'POST', data });
};
