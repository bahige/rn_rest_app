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

export const postComment = (dishId, rating, author, comment)  => async (dispatch) => {

    try {
        dispatch(commentLoading());
        // const  {data}  = await axios.get(baseUrl + 'dishes/' + dishId);
        setTimeout(() => {
            dispatch(addComment({dishId, rating, author, comment}));
        }, 2000); 
    } catch (error) {
        dispatch(commentFailed(error));
      }

};


export const addComment = (data) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {dishId : data.dishId, rating: data.rating, author: data.author, comment: data.comment,
    date: new Date(Date.now()).toISOString(), id:Math.floor(Math.random() * 100)}
});

export const commentLoading = () => ({
    type: ActionTypes.COMMENT_LOADING
});

export const commentFailed = (errorMessage) => ({
    type: ActionTypes.COMMENT_FAILED,
    payload: errorMessage
})