import { LoginBodyDTO, LoginResponseDTO } from '@api/login.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { authMutations } from '@services/mutations';
import Toast from 'react-native-toast-message';

export const useLogin = (): UseMutationResult<LoginResponseDTO, Error, LoginBodyDTO> => {
  return useMutation<LoginResponseDTO, Error, LoginBodyDTO>({
    ...authMutations.login,
    onSuccess: (data) => {
      if (data.success) {
        Toast.show({
          type: 'success',
          text1: 'Welcome back!',
          text2: 'Login successful',
        });
      }
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: error.message || 'Invalid username or password',
      });
    },
  });
};
