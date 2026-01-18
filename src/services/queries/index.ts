import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { authQueries } from './auth.queries';

export const queries = mergeQueryKeys(authQueries);

export { authQueries };

