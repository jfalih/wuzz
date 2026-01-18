import { ApiResponse } from '@http/response';

export type LoginBodyDTO = {
    username: string;
    password: string;
};

interface DeviceLoginDTO {
    id: number,
    name: string,
    brand: string,
    unique_id: string,
    user_id: number,
    ip_address: string,
    created_at: string,
    updated_at: string,
    deleted_at?: string,
}

interface LoginUserDTO {
    id: number;
    username: string;
    full_name: string;
    phone: number;
    countryCode: number;
    birth_date: string;
    created_at: string;
    updated_at: string;
}

export type LoginResponseDTO  = ApiResponse<{
    device: DeviceLoginDTO,
    user: LoginUserDTO,
    accessToken: string,
    refreshToken: string,
    verified: boolean,
    survey: boolean,
}>;
