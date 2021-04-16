import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_SELFIE_USERS, updateSelfieUsers } from './selfie.actions';
import { getSelfieUsersAPI } from './../../http/backend'

function* getSelfieUsersEffect() {
    try {
        // @ts-ignore
        const response = yield call(getSelfieUsersAPI, {params: {type: 'selfie', pageNo: 1}});
        // console.log('response==>', response);
        yield put(updateSelfieUsers(response.data))
    } catch (_) {
    }
}

export const selfieEffects = [
    takeEvery(GET_SELFIE_USERS, getSelfieUsersEffect),
];
