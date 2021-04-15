import { AppState } from "../../redux/store";
import { AuthState } from "./auth.reducer";

export const selectAuthState = (state: AppState): AuthState => state.auth;

export const selectAuthErrorMessage = (state: AppState): string => state.auth.errorMessage;
