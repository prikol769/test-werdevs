import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {
    ConverterAction,
    ConverterError,
    GET_CONVERTER_RATE,
    GetConvertorData,
    SET_ERROR,
    SET_LOADING,
    SET_UAH
} from '../types';



export const getConverterRate = (rateName: string): ThunkAction<void, RootState, unknown, ConverterAction> => {
    return async dispatch => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("apikey", `${process.env.REACT_APP_API_KEY}`);

            const requestOptions: any = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            const res = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${rateName}&base=UAH`, requestOptions);
            console.log(res, 'convertorData')

            if(!res.ok) {
                const resData: ConverterError = await res.json();
                throw new Error(resData.message);
            }

            const resData: GetConvertorData = await res.json();
            dispatch({
                type: GET_CONVERTER_RATE,
                payload: resData
            });
        }catch(err:any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}


export const setLoading = (): ConverterAction => {
    return {
        type: SET_LOADING,
    }
}

export const setError = (): ConverterAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}

export const setUah = (enteredUah: number): ConverterAction => {
    return {
        type: SET_UAH,
        payload: enteredUah
    }
}
