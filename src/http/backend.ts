
import { Path } from 'path-parser';
import { stringify } from 'querystring';
import { postAPI } from './api';
import { LOGIN_URL } from './urls';
import { LoginState } from '../components/auth/auth.component';

// eslint-disable-next-line
const getPathBuilder = (url: string) => {
    return new Path(url);
};

// eslint-disable-next-line
const getQueryParams = <T>(url: string, input: T): string => {
    const queryParams = stringify(input as any);
    return `${url}?${queryParams}`;
};

export const loginAPI = async (input: LoginState): Promise<any> => {
    return await postAPI(LOGIN_URL, input);
}
