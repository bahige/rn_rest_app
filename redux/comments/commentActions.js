import * as ActionTypes from '../actionTypes';
import {baseUrl} from '../../shared/baseUrl';
import axios from 'axios';


export const commentsFailed = (errorMessage) =>{
    return {
        type: ActionTypes.COMMENTS_FAILED,
        payload : errorMessage
    }
}

export const addComments = (comments)=> {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    }
}

export const fetchPromos = () => async (dispatch) => {
    try{
        const {comments} = await axios.get(baseUrl + 'comments');
        dispatch(addComments(comments));
    }
    catch(error){
        dispatch(commentsFailed(error));
    }

}