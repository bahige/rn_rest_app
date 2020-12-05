import axios from 'axios';
import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';

export const dishesLoading = () =>{
    return {
    type:ActionTypes.DISHES_LOADING
}}

export const dishesFailed = (errorMessage)=>{
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errorMessage
    }
}

export const addDishes= (data) =>{
    return {
        type:ActionTypes.ADD_DISHES,
        payload : data
    }
}


export const fetchDishes = () => async (dispatch) => {
    try {
      dispatch(dishesLoading());
      const  {data}  = await axios.get(baseUrl + 'dishes');
      dispatch(addDishes(data));
    } catch (error) {
      dispatch(dishesFailed(error));
    }
  };
