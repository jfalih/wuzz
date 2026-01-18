import { CheckVerificationBodyDTO, CheckVerificationErrorResponseDTO, CheckVerificationResponseDTO, SendVerificationBodyDTO, SendVerificationErrorResponse, SendVerificationResponseDTO } from '@core/api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { authMutations } from '@services/mutations';
import Toast from 'react-native-toast-message';

export const useSendVerification = (): UseMutationResult<SendVerificationResponseDTO, SendVerificationErrorResponse, SendVerificationBodyDTO> => {
  return useMutation({
    ...authMutations.verificationSend,
    onSuccess: (_, variables) => {
      const isEmail = 'email' in variables && variables.email;
      Toast.show({
        type: 'success',
        text1: 'OTP Sent',
        text2: isEmail ? 'Check your email for the code' : 'Check your phone for the code',
      });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Failed to Send OTP',
        text2: error.message || 'Please try again',
      });
    },
  });
};

export const useCheckVerification = (): UseMutationResult<CheckVerificationResponseDTO, CheckVerificationErrorResponseDTO, CheckVerificationBodyDTO> => {
  return useMutation({
    ...authMutations.verificationCheck,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Verified!',
        text2: 'OTP verified successfully',
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
