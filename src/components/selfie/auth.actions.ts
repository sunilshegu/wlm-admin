import { createAction } from 'redux-actions';
import { LoginState } from './../auth/auth.component';

export const LOGIN = 'LOGIN';
export const loginAction = createAction<LoginState>(LOGIN);

export const UPDATE_LOGIN_ERROR = 'UPDATE_LOGIN_ERROR';
export const updateLoginError = createAction<string>(UPDATE_LOGIN_ERROR);

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailedAction = createAction<string>(LOGIN_FAILED);

export const LOG_OUT = 'LOG_OUT';
export const logOutAction = createAction(LOG_OUT);