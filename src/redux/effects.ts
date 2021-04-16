import { all } from 'redux-saga/effects';
import { authEffects } from '../components/auth/auth.effects';
import { selfieEffects } from '../components/selfie/selfie.effects';

export function* appSaga() {
    yield all([
        ...authEffects,
        ...selfieEffects
    ]);
};
