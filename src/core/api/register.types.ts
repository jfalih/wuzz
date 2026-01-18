import { ApiResponse, ErrorResponse } from '@http/response';

export type RegisterResponse = ApiResponse<{
    device: RegisterDeviceDTO
    user: RegisterUserDTO
    accessToken: string
    refreshToken: string
}>

export interface RegisterBodyDTO {
    full_name: string;
    phone: number;
    countryCode: number;
    username: string;
    password: string;
    birthDate?: string;
}

export type RegisterErrorResponse = ErrorResponse<RegisterBodyDTO>;

export interface RegisterDeviceDTO {
    brand: string
    created_at: string
    id: number
    ip_address: string
    name: string
    unique_id: string
    updated_at: string
    user_id: number
  }

export interface RegisterUserDTO {
    birth_date: string
    countryCode: number
    created_at: string
    full_name: string
    id: number
    username: string
    phone: number
    phone_verified_at: any
    updated_at: string
}
