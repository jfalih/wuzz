import {ApiResponse} from '@core/http/response';

export type FetchSurveyResponse = ApiResponse<{
    questions: Question[]
}>;

export interface ConfirmSurveyBodyDTO {
  goal: string;
  gender: string;
  quit_duration: string;
}

export type ConfirmSurveyResponse = ApiResponse<null>;

export interface Question {
  title: string;
  description?: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  image: string;
  description: string;
  selected: boolean;
  title: string;
  value: string;
}
