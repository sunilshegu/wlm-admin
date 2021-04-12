import { ReducerFactory } from "redux-actions-ts-reducer"
import { setCurrentPatientIdAction, updateBodyTemperatureAction, updateHeartRateAction, updateHrvAction, updateRespiratoryRateAction, updateSkinTemperatureAction, updateSpO2Action } from "./dashboard.actions";

export interface DashboardData {
    heartRate: number;
    spO2: number;
    bodyTemperature: number;
    skinTemperature: number;
    hrv: number;
    respiratoryRate: number;
}

export interface DashboardState {
    currentPatientId: number;
    data: {
        [key: number] : DashboardData;
    }
}

const initialDashboardState: DashboardState = {
    currentPatientId: null,
    data: {}
}

export const dashboardReducer = new ReducerFactory<DashboardState>(initialDashboardState)
    .addReducer(setCurrentPatientIdAction, (state, action) => {
        return {
            ...state,
            currentPatientId: action.payload
        }
    })
    .addReducer(updateHeartRateAction, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], heartRate: d.value } }
        }
    })
    .addReducer(updateSpO2Action, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], spO2: d.value } }
        }
    })
    .addReducer(updateBodyTemperatureAction, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], bodyTemperature: d.value } }
        }
    })
    .addReducer(updateSkinTemperatureAction, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], skinTemperature: d.value } }
        }
    })
    .addReducer(updateRespiratoryRateAction, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], respiratoryRate: d.value } }
        }
    })
    .addReducer(updateHrvAction, (state, action) => {
        const d = action.payload;
        return {
            ...state,
            data: { ...state.data, [d.patientId]: { ...state.data[d.patientId], hrv: d.value } }
        }
    })
    .toReducer();