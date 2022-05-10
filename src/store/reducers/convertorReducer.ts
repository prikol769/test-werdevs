import {ConverterAction, ConverterState, GET_CONVERTER_RATE, SET_ERROR, SET_LOADING, SET_UAH} from '../types';

const initialState: ConverterState = {
    data: [],
    loading: false,
    enteredUah: null,
    error: ''
}

export default (state = initialState, action: ConverterAction): ConverterState => {
    switch (action.type) {
        case GET_CONVERTER_RATE:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: state.data.length >= 2 ? false : true,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_UAH:
            return {
                ...state,
                enteredUah: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
