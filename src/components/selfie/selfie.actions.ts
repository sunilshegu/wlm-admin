import { createAction } from 'redux-actions';
import { ApproveSelfie, DeleteImage, SelfieUser } from './selfie.types';

export const GET_SELFIE_USERS = 'GET_SELFIE_USERS';
export const getSelfieUsers = createAction<number>(GET_SELFIE_USERS);

export const UPDATE_SELFIE_USERS = 'UPDATE_SELFIE_USERS';
export const updateSelfieUsers = createAction<SelfieUser[]>(UPDATE_SELFIE_USERS);

export const APPROVE_SELFIE = 'APPROVE_SELFIE';
export const approveSelfie = createAction<ApproveSelfie>(APPROVE_SELFIE);

export const DELETE_IMAGE = 'DELETE_IMAGE';
export const deleteImage = createAction<DeleteImage>(DELETE_IMAGE);