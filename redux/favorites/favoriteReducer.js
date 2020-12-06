import * as ActionTypes from '../actionTypes';

export const favoritesReducer = (state= {favorites: []}  , action) => {
    switch( action.type){
    
        case ActionTypes.ADD_FAVORITE:
            if(state.favorites.some(el => el===action.payload)){
                return state;
                // If the dish is already in the favorites list, no need to add the dish to the favs list.
            }
            else{
                return {...state, favorites: favorites.concat(action.payload)};//payload will contain the dishId of the dish that we want to add to favorites.
            }
        
        default: 
          return state;
    }
}