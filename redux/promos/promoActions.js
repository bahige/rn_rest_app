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

export const addPromos = (promos)=> {
    return {
        type: ActionTypes.ADD_PROMOS,
        payload: promos
    }
}

export const fetchPromos = () => async (dispatch) => {
    try{
        dispatch(promosLoading());
        const {promos} = await axios.get(baseUrl + 'promotions');
        dispatch(addPromos(promos));
    }
    catch(error){
        dispatch(promosFailed(error));
    }

}