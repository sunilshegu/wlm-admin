import { AppState } from "../../redux/store";

export const selectAuthState = (state: AppState) => state.auth;

export const selectAuthErrorMessage = (state: AppState) => state.auth.errorMessage;
