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


/********************************************************************************/

export const postComment = (dishId, rating, author, comment)  => (dispatch) => {

    setTimeout(() => {
        dispatch(addComment(dishId, rating, author, comment));
    }, 2000);
};


export const addComment = (data) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {dishId : data.dishId, rating: data.rating, author: data.author, comment: data.comment}
});