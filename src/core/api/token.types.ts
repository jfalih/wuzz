import {ApiResponse, ErrorResponse, Timestamp} from '@core/http/response';

export type RefreshBodyDTO = {
  refreshToken: string;
};

export type RefreshTokenResponse = ApiResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export type RefreshTokenErrorResponse = ErrorResponse<null>;

export type ValidateBodyDTO = {
  refreshToken: string;
};


export type VerificationUserDTO = {
  id: number;
  username: string;
  full_name: string;
  birth_date: string;

  phone: number;
  country_code: number;
  email?: string;
  gender?: string;

  gems?: number;
  heart?: number;
  xp?: number;
  level: number;

  goal?: string;
  quit_duration?: string;

  email_verified_at?: Timestamp;
  phone_verified_at?: Timestamp;

  status: string;

  created_at: Timestamp;
  updated_at: Timestamp;
  deleted_at?: Timestamp;
};

export type ValidateTokenResponse = ApiResponse<{
  user: VerificationUserDTO;
}>;

export type ValidateTokenErrorResponse = ErrorResponse<null>;
