import { ApiResponse } from '@http/response';

export type ActivitiesResponse = ApiResponse<Data>

interface Data {
    activities: Activity[]
    next: string
}

export type Activity = {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};
