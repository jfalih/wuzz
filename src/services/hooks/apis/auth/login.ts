import { login } from '@api/login';
import { LoginBodyDTO, LoginResponseDTO } from '@api/login.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useLogin = (): UseMutationResult<LoginResponseDTO, Error, LoginBodyDTO> => {
  return useMutation<LoginResponseDTO, Error, LoginBodyDTO>({
    mutationFn: login,
  });
};
