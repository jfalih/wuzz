import {useQuery} from '@tanstack/react-query';
import {createQueryKeyStore} from '@lukemorales/query-key-factory';
import {AudioBuffer, AudioContext} from 'react-native-audio-api';
import { loadSoundsFromUri, loadSoundsFromFile } from '@core/api/sound';
import { SoundKey } from '@services/contexts/sound/sound.types';

type LoadSoundsResponse = Record<string, AudioBuffer>;
type LoadSoundsError = Error | {message: string};

export const soundQueryKeys = createQueryKeyStore({
  sounds: {
    loadFiles: (fileNames: string[], context: AudioContext) => ({
      queryKey: ['load', fileNames],
      queryFn: () => loadSoundsFromFile(fileNames, context),
    }),
    loadUri: (sources: Record<SoundKey, string>, context: AudioContext) => ({
      queryKey: ['loadUri', ...Object.keys(sources)],
      queryFn: () => loadSoundsFromUri(sources, context),
    }),
  },
});

export const useLoadSoundsFromUri = (
  sources: Record<SoundKey, string>,
  context?: AudioContext | null,
) => {
  return useQuery<LoadSoundsResponse, LoadSoundsError, LoadSoundsResponse, any>({
    ...soundQueryKeys.sounds.loadUri(sources, context!),
    enabled: Object.keys(sources).length > 0 && context !== null,
  });
};


export const useLoadSoundsFromFile = (
  fileNames: string[],
  context: AudioContext,
) => {
  return useQuery<LoadSoundsResponse, LoadSoundsError, LoadSoundsResponse, any>({
    ...soundQueryKeys.sounds.loadFiles(fileNames, context),
    enabled: fileNames.length > 0,
  });
};
