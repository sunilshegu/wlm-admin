import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appSaga } from './effects';
import { DashboardState, dashboardReducer } from '../components/dashboard/dashboard.reducer';
import { Action } from 'redux-actions';
import { LOG_OUT } from '../components/auth/auth.actions';
import { authReducer, AuthState } from '../components/auth/auth.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger)
}

export interface AppState {
    auth: AuthState,
    dashboard: DashboardState,
};

const appReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
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