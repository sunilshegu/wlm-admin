
import { Path } from 'path-parser';
import { stringify } from 'querystring';
import { deleteAPI, getAPI, patchAPI, postAPI } from './api';
import { LOGIN_URL, APPROVE_SELFIE_URL, GET_USERS_URL } from './urls';
import { LoginState } from '../components/auth/auth.component';
import { ApproveSelfie, DeleteImage } from '../components/selfie/selfie.types';

// eslint-disable-next-line
const getPathBuilder = (url: string) => {
    return new Path(url);
};

// eslint-disable-next-line
const getQueryParams = <T>(url: string, input: T): string => {
    const queryParams = stringify(input as any);
    return `${url}?${queryParams}`;
}

export const loginAPI = async (body: LoginState): Promise<any> => {
    return await postAPI(LOGIN_URL, body);
}

export const getSelfieUsersAPI = async (config: any): Promise<any> => {
    return await getAPI(GET_USERS_URL, config);
}

export const approveSelfieAPI = async (body: ApproveSelfie): Promise<any> => {
    return await patchAPI(APPROVE_SELFIE_URL+`${body.userId}`, body);
}

export const deleteImageAPI = async (body: DeleteImage): Promise<any> => {
    return await deleteAPI(`${GET_USERS_URL}${body.userId}/images/${body.index}`);
}
