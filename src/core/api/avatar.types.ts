import {ApiResponse} from '@http/response';

/**
 * * * Represents the response structure for the gear API.
 */
export type FetchGearResponse = ApiResponse<Gear[]>;
export interface Gear {
  id: number
  name: string
  created_at: string
  updated_at: string
}

/**
 * * * Represents the response structure for the variant API.
 */
export type FetchVariantResponse = ApiResponse<Variant[]>;
export interface Variant {
  id: number
  gear: Gear
  name: string
  created_at: string
  updated_at: string
}

/**
 * * * Represents the response structure for the material API.
 */


export type FetchMaterialResponse = ApiResponse<Material[]>;
export interface Material {
  id: number;
  image: string;
  name: string;
  file: string;
  is_subscription: boolean;
  price: number;
  created_at: string;
  updated_at: string;
}
