import { AppState } from "../../redux/store";
import { SelfieState } from "./selfie.reducer";
import { SelfieUser } from "./selfie.types";

export const selectSelfieState = (state: AppState): SelfieState => state.selfie;

export const selectSelfieErrorMessage = (state: AppState): string => selectSelfieState(state).errorMessage;

export const selectSelfieUsersData = (state: AppState): SelfieUser[] => selectSelfieState(state).usersData;
