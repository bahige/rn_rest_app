import * as ActionTypes from '../actionTypes';

export const leaderReducer = (state ={ isLoading : false, errorMessage : null, leaders:[]}, action) => {
    switch(action.type){
        case ActionTypes.LEADERS_LOADING:
            return {...state,  isLoading: true}
        
        case ActionTypes.LEADERS_FAILED:
            return {...state, errorMessage: action.payload}

        case ActionTypes.ADD_LEADERS:
            return {...state, leaders : action.payload}

        default:
            return state;
    }
}