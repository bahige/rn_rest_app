import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';
import axios from 'axios';


export const commentsLoading = () =>{
    return {
        type: ActionTypes.COMMENTS_LOADING,
    }
}

export const commentsFailed = (errorMessage) =>{
    return {
        type: ActionTypes.COMMENTS_FAILED,
        payload : errorMessage
    }
}

export const addComments = (data)=> {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: data
    }
}

export const fetchComments = () => async (dispatch) => {
    try{
        dispatch(commentsLoading());
        const {data} = await axios.get(baseUrl + 'comments');
        dispatch(addComments(data));
    }
    catch(error){
        dispatch(commentsFailed(error));
    }

}