import { ReducerFactory } from "redux-actions-ts-reducer";
import { updateSelfieUsers } from "./selfie.actions";
import { SelfieUser } from "./selfie.types";

export interface SelfieState {
    usersData: SelfieUser[],
    errorMessage: string
}

const initialAuthState: SelfieState = {
    usersData: [],
    errorMessage: null
}

export const selfieReducer = new ReducerFactory<SelfieState>(initialAuthState)
    .addReducer(updateSelfieUsers, (state, action) => {
        return {
            ...state,
            usersData: action.payload
        }
    })
    .toReducer();