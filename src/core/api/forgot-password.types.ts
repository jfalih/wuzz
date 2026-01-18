import { ApiResponse, ErrorResponse } from '@http/response';

// Request username to find account
export type ForgotPasswordRequestDTO = {
    username: string;
};

// Response with masked phone number
export type ForgotPasswordRequestResponseDTO = ApiResponse<{
    phone: string; // Masked phone number like "+1 ***-**-0100"
    countryCode: number;
    username: string;
}>;

// Verify OTP code
export type ForgotPasswordVerifyOTPDTO = {
    username: string;
    code: string;
};

export type ForgotPasswordVerifyOTPResponseDTO = ApiResponse<{
    resetToken: string; // Token to use for password reset
    expiresAt: string;
}>;

// Reset password with new password
export type ForgotPasswordResetDTO = {
    resetToken: string;
    newPassword: string;
    confirmPassword: string;
};

export type ForgotPasswordResetResponseDTO = ApiResponse<{
    success: boolean;
    message: string;
}>;

export type ForgotPasswordErrorResponse = ErrorResponse<unknown>;

