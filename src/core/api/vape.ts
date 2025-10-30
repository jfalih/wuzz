import request from '@http/request';
import api, { activityUrl } from '@http/url';
import { VapeBodyDTO, VapeResponseDTO, VapeTypeResponseDTO } from './vape.types';

export const addVape = (data: VapeBodyDTO): Promise<VapeResponseDTO> => {
    return request(api('/device'), {method: 'POST', data});
};

export const getSmokingTypes = async (): Promise<VapeTypeResponseDTO> => {
    // simulate a delay for demonstration purposes
    return request(activityUrl('/smokes/types'), {method: 'GET'});
};
