import { all } from 'redux-saga/effects';
import { authEffects } from '../components/auth/auth.effects';
// import { dashboardEffects } from '../components/dashboard/dashboard.effects';

export function* appSaga() {
    yield all([
        ...authEffects,
        // ...dashboardEffects,
    ]);
};
