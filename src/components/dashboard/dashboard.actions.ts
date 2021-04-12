import { createAction } from "redux-actions";

interface ActionData {
    patientId: number;
    value: number;
}

export const UPDATE_HEART_RATE = 'UPDATE_HEART_RATE';
export const updateHeartRateAction = createAction<ActionData>(UPDATE_HEART_RATE);

export const UPDATE_SPO2 = 'UPDATE_SPO2';
export const updateSpO2Action = createAction<ActionData>(UPDATE_SPO2);

export const UPDATE_BODY_TEMPERATURE = 'UPDATE_BODY_TEMPERATURE';
export const updateBodyTemperatureAction = createAction<ActionData>(UPDATE_BODY_TEMPERATURE);

export const UPDATE_SKIN_TEMPERATURE = 'UPDATE_SKIN_TEMPERATURE';
export const updateSkinTemperatureAction = createAction<ActionData>(UPDATE_SKIN_TEMPERATURE);

export const UPDATE_HRV = 'UPDATE_HRV';
export const updateHrvAction = createAction<ActionData>(UPDATE_HRV);

export const UPDATE_RESPIRATORY_RATE = 'UPDATE_RESPIRATORY_RATE';
export const updateRespiratoryRateAction = createAction<ActionData>(UPDATE_RESPIRATORY_RATE);

export const SET_CURRENT_PATIENT_ID = 'SET_CURRENT_PATIENT_ID';
export const setCurrentPatientIdAction = createAction<number>(SET_CURRENT_PATIENT_ID);

export const GO_TO_DASHBOARD = 'GO_TO_DASHBOARD';
export const goToDashboardAction = createAction(GO_TO_DASHBOARD);
