import qs, {StringifiableRecord} from 'query-string';
import Config from 'react-native-config';

const baseUrl = (
  host: string | undefined,
  path: string,
  query?: StringifiableRecord,
): string => qs.stringifyUrl({url: new URL(path, host).toString(), query});

export const authUrl = (path: string, query?: StringifiableRecord): string =>
  baseUrl(Config.AUTH_SERVICE_URL, path, query);

export const userUrl = (path: string, query?: StringifiableRecord): string =>
  baseUrl(Config.USER_SERVICE_URL, path, query);

export const activityUrl = (path: string, query?: StringifiableRecord): string =>
  baseUrl(Config.ACTIVITY_SERVICE_URL, path, query);

export default authUrl;
