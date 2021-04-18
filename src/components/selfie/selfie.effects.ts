import { takeEvery, call, put } from 'redux-saga/effects';
import { APPROVE_SELFIE, DELETE_IMAGE, getSelfieUsers, GET_SELFIE_USERS, updateSelfieUsers } from './selfie.actions';
import { approveSelfieAPI, getSelfieUsersAPI, deleteImageAPI } from './../../http/backend'
import { Action } from 'redux-actions';
import { ApproveSelfie, DeleteImage } from './selfie.types';

function* getSelfieUsersEffect(action: Action<Number>) {
    console.log('action--->', action.payload)
    try {
        // @ts-ignore
        const response = yield call(getSelfieUsersAPI, { params: { type: 'selfie', pageNo: action.payload } });
        // console.log('response==>', response);
        yield put(updateSelfieUsers(response.data))
    } catch (_) {
    }
}

function* approveSelfieEffect(action: Action<ApproveSelfie>) {
    try {
        // @ts-ignore
        const resp = yield call(approveSelfieAPI, action.payload);
        console.log('action--->', resp)
        if (resp) {
            // close selfie modal
            yield put(getSelfieUsers(1));
        }
    } catch (_) {

    }
}

function* deleteImageEffect(action: Action<DeleteImage>) {
    console.log('delete payload--->', action.payload)

    try {
        // @ts-ignore
        const resp = yield call(deleteImageAPI, action.payload);
        console.log('deleteresp--->', resp)
        if (resp) {
            // close selfie modal
            yield put(getSelfieUsers(1));
        }
    } catch (_) {

    }
}

export const selfieEffects = [
    takeEvery(GET_SELFIE_USERS, getSelfieUsersEffect),
    takeEvery(APPROVE_SELFIE, approveSelfieEffect),
    takeEvery(DELETE_IMAGE, deleteImageEffect),
];
