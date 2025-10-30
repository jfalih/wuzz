import { ApiResponse } from '@core/http/response';

export interface Mood {
  id: number
  name: string
  icon: string
  created_at: string
  updated_at: string
}

export type FetchMoodResponse = ApiResponse<Mood[]>;
