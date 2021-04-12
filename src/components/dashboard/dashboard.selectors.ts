import { AppState } from "../../redux/store"

export const selectDashboardState = (state: AppState) => state.dashboard;

export const selectCurrentPatientId = (state: AppState) => selectDashboardState(state).currentPatientId;

export const selectHeartRate = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.heartRate) || 0;
}

export const selectSpO2 = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.spO2) || 0;
};

export const selectBodyTemp = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.bodyTemperature) || 0;
};

export const selectSkinTemp = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.skinTemperature) || 0;
};

export const selectRespiratoryRate = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.respiratoryRate) || 0;
};
    
export const selectHRV = (state: AppState) => {
    const currentPatientId = selectCurrentPatientId(state);
    const data = currentPatientId && selectDashboardState(state).data[currentPatientId];
    return (data && data.hrv) || 0;
};