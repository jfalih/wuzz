import { RegisterBodyDTO, RegisterResponse, RegisterErrorResponse } from '@api/register.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { authMutations } from '@services/mutations';
import Toast from 'react-native-toast-message';

export const useRegister = (): UseMutationResult<RegisterResponse, RegisterErrorResponse, RegisterBodyDTO> => {
  return useMutation<RegisterResponse, RegisterErrorResponse, RegisterBodyDTO>({
    ...authMutations.register,
    onSuccess: (data) => {
      if (data.success) {
        Toast.show({
          type: 'success',
          text1: 'Account Created!',
          text2: 'Welcome to Fossa',
        });
      }
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        text2: error.message || 'Unable to create account',
      });
    },
  });
};
