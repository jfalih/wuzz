import { AudioBuffer, AudioContext } from 'react-native-audio-api';
import { Platform } from 'react-native';
import * as RNFS from '@dr.pogodin/react-native-fs';
import { Buffer } from 'buffer'; // make sure 'buffer' is installed
import request from '@http/request';
import { SoundKey } from '@services/contexts/sound/sound.types';

export async function loadSoundsFromFile(fileNames: string[], context: AudioContext): Promise<Record<string, AudioBuffer>> {
  const bufferMap: Record<string, AudioBuffer> = {};

  for (const fileName of fileNames) {
    const filePath =
      Platform.OS === 'ios'
        ? `${RNFS.MainBundlePath}/${fileName}`
        : `${RNFS.DocumentDirectoryPath}/${fileName}`; // adjust if needed

    const exists = await RNFS.exists(filePath);
    if (!exists) {
      throw new Error(`File not found: ${filePath}`);
    }

    const base64 = await RNFS.readFile(filePath, 'base64');

    const bytes = Buffer.from(base64, 'base64'); // replaces atob+Uint8Array

    const audioBuffer = await context.decodeAudioData(bytes.buffer);
    bufferMap[fileName] = audioBuffer;
  }

  return bufferMap;
}

export async function loadSoundsFromUri(
  sources: Record<SoundKey, string>,
  context: AudioContext,
): Promise<Record<SoundKey, AudioBuffer>> {
  const bufferMap: Record<SoundKey, AudioBuffer> = {};
  Object.entries(sources).forEach(async ([key, uri]) => {
    try {
      const arrayBuffer = await request(uri, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });

      const audioBuffer = await context.decodeAudioData(arrayBuffer);
      console.log(`Loaded sound for ${key} from ${uri}`);
      bufferMap[key as SoundKey] = audioBuffer;
    } catch (error) {
      console.error(`Error loading audio from ${uri}`, error);
      throw new Error(`Failed to load sound from ${uri}`);
    }
  });

  console.log('bufferMaps', bufferMap);
  return bufferMap;
}
