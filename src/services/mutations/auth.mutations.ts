import { login } from '@api/login';
import { register } from '@api/register';
import { verificationSend, verificationCheck } from '@api/verification';
import {
  forgotPasswordRequest,
  forgotPasswordVerifyOTP,
  forgotPasswordReset,
} from '@api/forgot-password';

export const authMutations = {
  login: {
    mutationKey: ['auth', 'login'],
    mutationFn: login,
  },
  register: {
    mutationKey: ['auth', 'register'],
    mutationFn: register,
  },
  verificationSend: {
    mutationKey: ['auth', 'verification', 'send'],
    mutationFn: verificationSend,
  },
  verificationCheck: {
    mutationKey: ['auth', 'verification', 'check'],
    mutationFn: verificationCheck,
  },
  forgotPasswordRequest: {
    mutationKey: ['auth', 'forgot-password', 'request'],
    mutationFn: forgotPasswordRequest,
  },
  forgotPasswordVerifyOTP: {
    mutationKey: ['auth', 'forgot-password', 'verify-otp'],
    mutationFn: forgotPasswordVerifyOTP,
  },
  forgotPasswordReset: {
    mutationKey: ['auth', 'forgot-password', 'reset'],
    mutationFn: forgotPasswordReset,
  },
} as const;

