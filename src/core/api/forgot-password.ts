import request from '@http/request';
import { authUrl } from '@http/url';
import {
  ForgotPasswordRequestDTO,
  ForgotPasswordVerifyOTPDTO,
  ForgotPasswordResetDTO,
} from './forgot-password.types';

const FORGOT_PASSWORD_URL = {
  REQUEST: '/forgot-password/request',
  VERIFY_OTP: '/forgot-password/verify-otp',
  RESET: '/forgot-password/reset',
};

export const forgotPasswordRequest = (data: ForgotPasswordRequestDTO) => {
  return request(authUrl(FORGOT_PASSWORD_URL.REQUEST), { method: 'POST', data });
};

export const forgotPasswordVerifyOTP = (data: ForgotPasswordVerifyOTPDTO) => {
  return request(authUrl(FORGOT_PASSWORD_URL.VERIFY_OTP), { method: 'POST', data });
};

export const forgotPasswordReset = (data: ForgotPasswordResetDTO) => {
  return request(authUrl(FORGOT_PASSWORD_URL.RESET), { method: 'POST', data });
};

