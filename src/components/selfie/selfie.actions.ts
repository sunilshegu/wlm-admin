import { createAction } from 'redux-actions';
import { SelfieUser } from './selfie.types';

export const GET_SELFIE_USERS = 'GET_SELFIE_USERS';
export const getSelfieUsers = createAction(GET_SELFIE_USERS);


export const UPDATE_SELFIE_USERS = 'UPDATE_SELFIE_USERS';
export const updateSelfieUsers = createAction<SelfieUser[]>(UPDATE_SELFIE_USERS);
