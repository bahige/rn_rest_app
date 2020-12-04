import * as ActionTypes from '../actionTypes';

export const commentReducer = (state= { isLoading: false, errorMessage: null, comments: []}, action) =>{
    switch(action.type){
        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading: false};
        
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errorMessage: action.payload};

        case ActionTypes.ADD_COMMENTS:
            return {...state, comments: action.payload};

        default:
            return state;
    }
}