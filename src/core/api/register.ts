import request from '@http/request';
import {authUrl} from '@http/url';
import { RegisterBodyDTO } from './register.types';

export const register = (data: RegisterBodyDTO) => {
  return request(authUrl('/register'), {method: 'POST', data});
};
