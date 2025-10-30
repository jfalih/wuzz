import { verificationCheck, verificationSend } from '@api/verification';
import { CheckVerificationBodyDTO, CheckVerificationErrorResponseDTO, CheckVerificationResponseDTO, SendVerificationBodyDTO, SendVerificationErrorResponse, SendVerificationResponseDTO } from '@core/api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';


export const useSendVerification = (): UseMutationResult<SendVerificationResponseDTO, SendVerificationErrorResponse, SendVerificationBodyDTO> => {
  return useMutation({
    mutationFn: (body: SendVerificationBodyDTO) => verificationSend(body),
  });
};

export const useCheckVerification = (): UseMutationResult<CheckVerificationResponseDTO, CheckVerificationErrorResponseDTO, CheckVerificationBodyDTO> => {
  return useMutation({
    mutationFn: (body: CheckVerificationBodyDTO) => verificationCheck(body),
  });
};
