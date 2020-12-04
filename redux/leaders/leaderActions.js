import axios from 'axios';
import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';

export const leadersLoading = () =>{
    return {
        type: ActionTypes.LEADERS_LOADING
    }
}


export const leadersFailed = (errorMessage) => {
    return {
        type: ActionTypes.LEADERS_FAILED,
        payload: errorMessage
    }
}

export const addLeaders = (data)=>{
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: data
    }
}

export const fetchLeaders = () => async (dispatch) => {
    try{
        dispatch(leadersLoading());
        const {data}= await axios.get(baseUrl + 'leaders');
        dispatch(addLeaders(data))
    } catch(error){
        dispatch(leadersFailed(error))
    }
}