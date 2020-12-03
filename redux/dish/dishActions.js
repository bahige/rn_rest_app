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

export const addDishes= (dishes) =>{
    return {
        type:ActionTypes.ADD_DISHES,
        payload : dishes
    }
}


export const fetchDishes = () => async (dispatch) => {
    try {
      dispatch(dishesLoading());
      const { dishes } = await axios.get(baseUrl + 'dishes');
      dispatch(addDishes(dishes));
    } catch (error) {
      dispatch(dishesFailed(error));
    }
  };