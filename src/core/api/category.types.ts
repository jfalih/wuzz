import { ApiResponse } from '@core/http/response';

export type FetchCategoryResponse = ApiResponse<Category[]>;
export interface Category {
    id: number
    name: string
    image_url: string
    description: string
    created_at: string
    updated_at: string
}
