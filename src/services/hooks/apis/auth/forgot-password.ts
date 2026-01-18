import {
  ForgotPasswordRequestDTO,
  ForgotPasswordRequestResponseDTO,
  ForgotPasswordVerifyOTPDTO,
  ForgotPasswordVerifyOTPResponseDTO,
  ForgotPasswordResetDTO,
  ForgotPasswordResetResponseDTO,
} from '@api/forgot-password.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { authMutations } from '@services/mutations';
import Toast from 'react-native-toast-message';

export const useForgotPasswordRequest = (): UseMutationResult<
  ForgotPasswordRequestResponseDTO,
  Error,
  ForgotPasswordRequestDTO
> => {
  return useMutation({
    ...authMutations.forgotPasswordRequest,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Account Found',
        text2: 'OTP will be sent to your phone',
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'User not found',
      });
    },
  });
};

export const useForgotPasswordVerifyOTP = (): UseMutationResult<
  ForgotPasswordVerifyOTPResponseDTO,
  Error,
  ForgotPasswordVerifyOTPDTO
> => {
  return useMutation({
    ...authMutations.forgotPasswordVerifyOTP,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'OTP Verified',
        text2: 'You can now reset your password',
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Verification Failed',
        text2: error.message || 'Invalid OTP code',
      });
    },
  });
};

export const useForgotPasswordReset = (): UseMutationResult<
  ForgotPasswordResetResponseDTO,
  Error,
  ForgotPasswordResetDTO
> => {
  return useMutation({
    ...authMutations.forgotPasswordReset,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Password Reset!',
        text2: 'You can now login with your new password',
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Reset Failed',
        text2: error.message || 'Unable to reset password',
      });
    },
  });
};

