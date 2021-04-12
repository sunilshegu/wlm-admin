import axios, { AxiosRequestConfig } from 'axios';
import { getAuthorizationToken } from './helpers';

// intercepting the requests
axios.interceptors.request.use((config) => {
    return {
        ...config, baseURL: 'https://medical-project-admin.herokuapp.com', headers: {
            ...config.headers, Authorization: getAuthorizationToken()
        }
    };
});

/**
 * B = Body of the request
 * R = Response of the request
 */
export const postAPI = async <B, R>(url: string, body: B, config: AxiosRequestConfig = {}): Promise<R> => {
    return axios.post(url, body, config).then((resp) => resp.data);
};

export const getAPI = async <R>(url: string, config: AxiosRequestConfig = {}): Promise<R> => {
    return axios.get(url, config).then((resp) => resp.data);
};

export const putAPI = async <B, R>(url: string, body: B, config: AxiosRequestConfig = {}): Promise<R> => {
    return axios.put(url, body, config).then((resp) => resp.data);
};

export const deleteAPI = async <B, R>(url: string, config: AxiosRequestConfig = {}): Promise<R> => {
    return axios.delete(url, config).then((resp) => resp.data);
};
