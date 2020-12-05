import * as ActionTypes from '../actionTypes';

export const promoReducer = (state= { isLoading: false, errorMessage: null, promos : []}, action) =>{
    switch(action.type){
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: false, errorMessage :null, promos:[]};
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, errorMessage: action.payload};

        case ActionTypes.ADD_PROMOS:
            return {...state, promos: action.payload};

        default:
            return state;
    }
}