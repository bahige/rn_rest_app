import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';
import axios from 'axios';

export const promosLoading = () => {
    return { type : ActionTypes.PROMOS_LOADING }
}

export const promosFailed = (errorMessage) =>{
    return {
        type: ActionTypes.PROMOS_FAILED,
        payload : errorMessage
    }
}

export const addPromos = (data)=> {
    return {
        type: ActionTypes.ADD_PROMOS,
        payload: data
    }
}

export const fetchPromos = () => async (dispatch) => {
    try{
        dispatch(promosLoading());
        const {data} = await axios.get(baseUrl + 'promotions');
        dispatch(addPromos(data));
    }
    catch(error){
        dispatch(promosFailed(error));
    }

}