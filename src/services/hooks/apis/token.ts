import { refresh, validate } from '@core/api/token';
import { RefreshBodyDTO, RefreshTokenErrorResponse, RefreshTokenResponse, ValidateTokenResponse, ValidateTokenErrorResponse, ValidateBodyDTO } from '@core/api/token.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useValidateMutation = (): UseMutationResult<ValidateTokenResponse, ValidateTokenErrorResponse, ValidateBodyDTO> => {
    return useMutation<ValidateTokenResponse, ValidateTokenErrorResponse, ValidateBodyDTO>({
      mutationFn: validate,
    });
  };

export const useRefreshMutation = (): UseMutationResult<RefreshTokenResponse, RefreshTokenErrorResponse, RefreshBodyDTO> => {
    return useMutation<RefreshTokenResponse, RefreshTokenErrorResponse, RefreshBodyDTO>({
      mutationFn: refresh,
    });
  };
