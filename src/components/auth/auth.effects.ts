import { takeEvery, call, put } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { loginAPI } from '../../http/backend';
import { LoginState } from './login/login.component';
import { LOGIN, loginFailedAction } from './auth.actions';
import { setAuthorizationToken } from '../../http/helpers';

function* loginEffect(action: Action<LoginState>) {
    try {
        const loginData = action.payload;
        // const prevRoute = loginData.prevPath;
        // @ts-ignore
        const response = yield call(loginAPI, loginData);
        if (response && response.data) {
            setAuthorizationToken(response.data.token);
            // if (prevRoute) {
                // changeRoute(prevRoute);
            // } else {
            // }
        }
    } catch (_) {
        yield put(loginFailedAction('Incorrect Email or Password'));
    }
}

export const authEffects = [
    takeEvery(LOGIN, loginEffect),
];
