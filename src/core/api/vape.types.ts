import { ApiResponse } from '@http/response';

export interface VapeBodyDTO {
    name: string;
    type_id: number;
    brand: string;
    battery: number;
}

export type VapeResponseDTO = ApiResponse<{
    vape: VapeBodyDTO
}>

export type VapeTypeResponseDTO = ApiResponse<VapeTypeItem[]>;
export interface VapeTypeItem {
  id: number
  name: string
  image_url: string
  created_at: string
  updated_at: string
}
