import { takeEvery, call, put } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { loginAPI } from '../../http/backend';
import { LoginState } from './auth.component';
import { LOGIN, loginFailedAction } from './auth.actions';
import { setAuthorizationToken } from '../../http/helpers';
import { changeRoute } from '../../routing/history';
import { PATHS } from '../../routing/routing.helpers';

function* loginEffect(action: Action<LoginState>) {
    try {
        const loginData = action.payload;
        // @ts-ignore
        const response = yield call(loginAPI, loginData);

        if (response && response.data) {
            setAuthorizationToken(response.data.token);
            changeRoute(PATHS.DASHBOARD);
        }
    } catch (_) {
        yield put(loginFailedAction('Invalid credentials'));
    }
}

export const authEffects = [
    takeEvery(LOGIN, loginEffect),
];
