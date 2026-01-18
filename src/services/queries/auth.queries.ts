import { createQueryKeys } from '@lukemorales/query-key-factory';
import { login } from '@api/login';
import { register } from '@api/register';
import { verificationSend, verificationCheck } from '@api/verification';
import {
  forgotPasswordRequest,
  forgotPasswordVerifyOTP,
  forgotPasswordReset,
} from '@api/forgot-password';
import type { LoginBodyDTO } from '@api/login.types';
import type { RegisterBodyDTO } from '@api/register.types';
import type { SendVerificationBodyDTO, CheckVerificationBodyDTO } from '@api/verification.types';
import type {
  ForgotPasswordRequestDTO,
  ForgotPasswordVerifyOTPDTO,
  ForgotPasswordResetDTO,
} from '@api/forgot-password.types';

export const authQueries = createQueryKeys('auth', {
  login: (credentials: LoginBodyDTO) => ({
    queryKey: [credentials.username],
    queryFn: () => login(credentials),
  }),
  register: (data: RegisterBodyDTO) => ({
    queryKey: [data.username, data.phone],
    queryFn: () => register(data),
  }),
  verificationSend: (data: SendVerificationBodyDTO) => ({
    queryKey: ['verification', 'send', data.phone, data.countryCode, data.type],
    queryFn: () => verificationSend(data),
  }),
  verificationCheck: (data: CheckVerificationBodyDTO) => ({
    queryKey: ['verification', 'check', data.phone, data.countryCode, data.code],
    queryFn: () => verificationCheck(data),
  }),
  forgotPasswordRequest: (data: ForgotPasswordRequestDTO) => ({
    queryKey: ['forgot-password', 'request', data.username],
    queryFn: () => forgotPasswordRequest(data),
  }),
  forgotPasswordVerifyOTP: (data: ForgotPasswordVerifyOTPDTO) => ({
    queryKey: ['forgot-password', 'verify-otp', data.username, data.code],
    queryFn: () => forgotPasswordVerifyOTP(data),
  }),
  forgotPasswordReset: (data: ForgotPasswordResetDTO) => ({
    queryKey: ['forgot-password', 'reset', data.resetToken],
    queryFn: () => forgotPasswordReset(data),
  }),
});

