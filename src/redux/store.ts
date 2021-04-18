import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appSaga } from './effects';
import { selfieReducer, SelfieState, } from '../components/selfie/selfie.reducer';

import { Action } from 'redux-actions';
import { LOG_OUT } from '../components/auth/auth.actions';
import { authReducer, AuthState } from '../components/auth/auth.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    // const { logger } = require('redux-logger');
    // middlewares.push(logger)
}

export interface AppState {
    auth: AuthState,
    selfie: SelfieState,
};

const appReducer = combineReducers({
    auth: authReducer,
    selfie: selfieReducer,
});

const rootReducer = (state: AppState, action: Action<any>) => {
    if (action.type === LOG_OUT) {
        state = undefined;
    }
    return appReducer(state, action)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(appSaga)

export default store;