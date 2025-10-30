import { LoginResponseDTO } from '@api/login.types';
import { register } from '@api/register';
import { RegisterBodyDTO, RegisterErrorResponse } from '@api/register.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useRegister = (): UseMutationResult<LoginResponseDTO, RegisterErrorResponse, RegisterBodyDTO> => {
  return useMutation<LoginResponseDTO, RegisterErrorResponse, RegisterBodyDTO>({ mutationFn: register });
};
