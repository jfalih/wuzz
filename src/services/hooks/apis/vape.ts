import { VapeBodyDTO, VapeResponseDTO, VapeTypeResponseDTO } from '@api/vape.types';
import { addVape, getSmokingTypes } from '@core/api/vape';
import { ErrorResponse } from '@core/http/response';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { UseMutationResult, useMutation, useQuery } from '@tanstack/react-query';

export const vapeQueryKeys = createQueryKeyStore({
    vape: {
        getTypes: () => ({
            queryKey: ['getSmokingTypes'],
            queryFn: () => getSmokingTypes(), // Ensure correct return type
        }),
    },
});


export const useAddVape = (): UseMutationResult<VapeResponseDTO, Error, VapeBodyDTO> => {
    return useMutation<VapeResponseDTO, Error, VapeBodyDTO>({
      mutationFn: (body: VapeBodyDTO) => addVape(body),
    });
  };

export const useVapeTypes = () => {
    return useQuery<
        VapeTypeResponseDTO,
        ErrorResponse<null>,
        VapeTypeResponseDTO['data'],
        any
    >({
        ...vapeQueryKeys.vape.getTypes(),
        select: (data) => data.data,
    });
}