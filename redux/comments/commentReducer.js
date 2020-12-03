import * as ActionTypes from '../actionTypes';

export const commentReducer = (state= { isLoading: false, errorMessage: null, promotions : []}, action) =>{
    switch(action.type){
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: false};
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, errorMessage: action.payload};

        case ActionTypes.ADD_PROMOS:
            return {...state, promotions: action.payload};

        default:
            return state;
    }
}