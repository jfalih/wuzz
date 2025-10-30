import { ApiResponse } from '@http/response';

export type LoginBodyDTO = {
    phone: number;
    countryCode: number;
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

export type LoginResponseDTO  = ApiResponse<{
    device: DeviceLoginDTO,
    verified: boolean,
    survey: boolean,
}>;
