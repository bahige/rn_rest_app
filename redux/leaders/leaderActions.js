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

export const addLeaders = (leaders)=>{
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    }
}

export const fetchLeaders = () => async (dispatch) => {
    try{
        dispatch(leadersLoading());
        const {leaders}= await axios.get(baseUrl + 'leaders');
        dispatch(addLeaders(leaders))
    } catch(error){
        dispatch(leadersFailed(error))
    }
}