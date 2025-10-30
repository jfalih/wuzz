// Make Me Login Using Url.ts And request.ts on http

import request from '@http/request';
import {authUrl} from '@http/url';
import {LoginBodyDTO} from './login.types';

export const login = (data: LoginBodyDTO) => {
  return request(authUrl('/login'), {method: 'POST', data});
};
