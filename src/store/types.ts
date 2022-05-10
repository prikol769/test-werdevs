export const GET_CONVERTER_RATE = 'GET_CONVERTER_RATE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const SET_UAH ='SET_UAH';


export interface GetConvertorData {
    base: string;
    date: string;
    rates: {
        [k in 'USD' | 'EUR' | 'PLN']: number;
    }
    success: boolean;
    timestamp: number;
}


export interface ConverterError {
    cod: string;
    message: string;
}

export interface ConverterState {
    data: GetConvertorData[];
    loading: boolean;
    enteredUah: number | null,
    error: string;
}


interface GetConverterRateAction {
    type: typeof GET_CONVERTER_RATE;
    payload: GetConvertorData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

interface SetUAHAction {
    type: typeof SET_UAH;
    payload: number;
}


export type ConverterAction =
    GetConverterRateAction
    | SetLoadingAction
    | SetErrorAction
    | SetUAHAction

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}
