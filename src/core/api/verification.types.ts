import { ApiResponse, ErrorResponse } from '@http/response';

export type ChannelTypeDTO = 'sms' | 'call' | 'whatsapp';
export type VerificationMethod = 'phone' | 'email';

export type SendVerificationBodyDTO = 
  | {
      phone: number;
      countryCode: number;
      type: ChannelTypeDTO;
      email?: never;
    }
  | {
      email: string;
      phone?: never;
      countryCode?: never;
      type?: never;
    };

export type CheckVerificationBodyDTO = 
  | {
      phone: number;
      countryCode: number;
      code: string;
      email?: never;
    }
  | {
      email: string;
      code: string;
      phone?: never;
      countryCode?: never;
    };

export type VerificationPinCheckBodyDTO = {
    phone: number;
    countryCode: number;
    pin: number;
};

export type SendVerificationResponseDTO  = ApiResponse<{
    resendAt: string;
}>;

export type SendVerificationErrorResponse = ErrorResponse<unknown>;

export type CheckVerificationResponseDTO = ApiResponse<{
    accessToken: string,
    refreshToken: string,
    user: VerificationUserDTO
}>

export type CheckVerificationErrorResponseDTO = ErrorResponse<unknown>;

export interface VerificationUserDTO {
    birth_date: string
    countryCode: number
    created_at: string
    id: number
    phone: number
    full_name: string
    phone_verified_at: any
    updated_at: string
}

export type VerificationCheckResponseDTO  = ApiResponse<{
    accessToken: string;
    refreshToken: string;
    user: VerificationUserDTO;
}>;
