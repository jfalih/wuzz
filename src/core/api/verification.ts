import request from '@http/request';
import api from '@http/url';
import { CheckVerificationBodyDTO, SendVerificationBodyDTO } from './verification.types';

const VERIFICATION_URL = {
  SEND: '/verify/send',
  CHECK: '/verify/check',
};

export const verificationSend = (data: SendVerificationBodyDTO) => {
  return request(api(VERIFICATION_URL.SEND), {method: 'POST', data});
};

export const verificationCheck = (data: CheckVerificationBodyDTO) => {
    return request(api(VERIFICATION_URL.CHECK), {method: 'POST', data});
};
