import * as ActionTypes from '../actionTypes';

const favoriteReducer = (state={favorites: []}, action) => {
    switch( action.type){
        case ActionTypes.ADD_FAVORITE:
            if(state.some(el => el===action.payload)){
                return state;
            }
            else{
                return state.concat(action.payload);
            }
        
        default: 
          return state;
    }
}