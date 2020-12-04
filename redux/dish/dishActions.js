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


/******************************************************************************/

export const dishLoading = (dishId) =>{
    return {
    type:ActionTypes.DISH_LOADING,
    payload: dishId
}}

export const dishFailed = (errorMessage)=>{
    return {
        type: ActionTypes.DISH_FAILED,
        payload: errorMessage
    }
}

export const addDish= (data) =>{
    return {
        type:ActionTypes.ADD_DISH,
        payload : data
    }
}


export const fetchDish = (dishId) => async (dispatch) => {
    try {
      dispatch(dishLoading(dishId));
      const  {data}  = await axios.get(baseUrl + 'dishes/' + dishId);
      dispatch(addDish(data));
    } catch (error) {
      dispatch(dishFailed(error));
    }
  };