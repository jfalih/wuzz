import {ErrorResponse} from '@http/response';
import {createQueryKeyStore} from '@lukemorales/query-key-factory';
import {useMutation, UseMutationResult, useQuery} from '@tanstack/react-query';
import { confirmSurvey, surveys } from '@core/api/survey';
import { ConfirmSurveyBodyDTO, ConfirmSurveyResponse, FetchSurveyResponse } from '@core/api/survey.types';

export const surveyQueryKeys = createQueryKeyStore({
  surveys: {
    fetch: () => ({
      queryKey: ['fetchSurveys'],
      queryFn: () => surveys(), // Define the queryFn here
    }),
  },
});

export const useFetchSurveys = () => {
    return useQuery<
        FetchSurveyResponse,
        ErrorResponse<null>,
        FetchSurveyResponse['data'],
        any
    >({
        ...surveyQueryKeys.surveys.fetch(),
        select: data => data.data,
    });
};

export const useConfirmSurveyMutation = (): UseMutationResult<ConfirmSurveyResponse, Error, ConfirmSurveyBodyDTO> => {
  return useMutation<ConfirmSurveyResponse, Error, ConfirmSurveyBodyDTO>({
    mutationFn: confirmSurvey,
  });
};
