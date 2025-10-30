import {gear, material, materialByVariantID, variantByGearID} from '@api/avatar';
import {FetchGearResponse, FetchMaterialResponse, FetchVariantResponse} from '@api/avatar.types';
import {ErrorResponse} from '@http/response';
import {createQueryKeyStore} from '@lukemorales/query-key-factory';
import {useQuery} from '@tanstack/react-query';

export const avatarQueryKeys = createQueryKeyStore({
  gear: {
    fetch: () => ({
      queryKey: ['fetchGear'],
      queryFn: gear, // Define the queryFn here
    }),
  },
  variant: {
    getVariantByGearID: (gearID: number) => ({
      queryKey: ['getVariantByGearID', gearID],
      queryFn: () => variantByGearID(gearID), // Define the query
    }),
  },
  material: {
    getMaterial: () => ({
      queryKey: ['getMaterial'],
      queryFn: material, // Define the queryFn here
    }),
    getMaterialByVariantID: (variantID: number) => ({
      queryKey: ['getMaterialByVariantID', variantID],
      queryFn: () => materialByVariantID(variantID), // Define the query
    }),
  },
});

export const useFetchGear = () => {
    return useQuery<
        FetchGearResponse,
        ErrorResponse<null>,
        FetchGearResponse['data'],
        any
    >({
        ...avatarQueryKeys.gear.fetch(),
        select: data => data.data,
    });
};

export const useVariantByGearID = (gearID: number) => {
  return useQuery<
    FetchVariantResponse,
    ErrorResponse<null>,
    FetchVariantResponse['data'],
    any
  >({
    ...avatarQueryKeys.variant.getVariantByGearID(gearID),
    select: (data) => data.data,
    enabled: true,
  });
};

export const useMaterialByVariantID = (variantID: number) => {
  return useQuery<
    FetchMaterialResponse,
    ErrorResponse<null>,
    FetchMaterialResponse['data'],
    any
  >({
    ...avatarQueryKeys.material.getMaterialByVariantID(variantID),
    select: data => data.data,
    enabled: !!variantID,
  });
};
