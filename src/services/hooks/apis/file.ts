import supabase from '@core/supabase';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import * as RNFS from '@dr.pogodin/react-native-fs';

// Helper: Convert Blob to file
async function blobToBufferSource(blob: Blob) {
  const reader = new FileReader();
  const base64Data = await new Promise<string>((resolve, reject) => {
    reader.onerror = reject;
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(',')[1];
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  });

  const filePath = `${RNFS.CachesDirectoryPath}/${Date.now()}.bin`;
  await RNFS.writeFile(filePath, base64Data, 'base64');

  return { uri: 'file://' + filePath };
}

// Create query keys for the caching system
export const queryKeys = createQueryKeyStore({
  download: {
    getDownloadFile: (folder: string, path: string) => ({
      queryKey: ['getCachedFile', folder, path],
      queryFn: async () => {
        const { data, error } = await supabase.storage.from(folder).download(path);
        if (error) {throw error;}

        return blobToBufferSource(data); // returns BufferSource
    },
  }),
  },
});


// Custom hook for React Query that retrieves the cached file or fetches it
export const useDownloadFile = (folder: string, path: string) => {
  return useQuery({
    ...queryKeys.download.getDownloadFile(folder, path),
    select: (data) => data, // You can add transformations here if needed
    placeholderData: keepPreviousData,
    enabled: !!folder && !!path, // Ensures the query only runs when the path is available
  });
};
