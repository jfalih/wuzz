// Make Me Login Using Url.ts And request.ts on http

import request from '@http/request';
import {authUrl} from '@http/url';
import { RefreshBodyDTO } from './token.types';

export const validate = (data: RefreshBodyDTO) => {
  return request(authUrl('/validate'), {method: 'POST', data});
};

export const refresh = (data: RefreshBodyDTO) => {
  return request(authUrl('/refresh'), {method: 'POST', data});
};

export const logout = () => {
  return request(authUrl('/logout'), {method: 'POST'});
};
