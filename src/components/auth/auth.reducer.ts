import { ReducerFactory } from "redux-actions-ts-reducer";
import { loginFailedAction, updateLoginError } from "./auth.actions";

export interface AuthState {
    errorMessage: string;
}

const initialAuthState: AuthState = {
    errorMessage: null
}

export const authReducer = new ReducerFactory<AuthState>(initialAuthState)
    .addReducer(loginFailedAction, (state, action) => {
        return {
            ...state,
            errorMessage: action.payload
        }
    })
    .addReducer(updateLoginError, (state, action) => {
        return {
            ...state,
            errorMessage: action.payload
        }
    })
    .toReducer();