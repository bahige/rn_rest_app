import * as ActionTypes from '../actionTypes';


export const dishReducer = (state = { isLoading : false, errorMessage: null, dishes: []}, action)=>{
    switch(action.type){
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errorMessage :null, dishes:[]}

        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errorMessage: null, dishes: action.payload};
        
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading : false, errorMessage: action.payload};

        default: 
            return state;
    }
}

export const singleDishReducer = (state = { isLoading : false, errorMessage: null, dish: {}}, action)=>{
    switch(action.type){
        case ActionTypes.DISH_LOADING:
            return {...state, isLoading: true, errorMessage :null, dish:action.payload};

        case ActionTypes.ADD_DISH:
            return {...state, isLoading: false, errorMessage: null, dish: action.payload};
        
        case ActionTypes.DISH_FAILED:
            return {...state, isLoading : false, errorMessage: action.payload};

        default: 
            return state;
    }
}