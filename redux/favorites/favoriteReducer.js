import * as ActionTypes from '../actionTypes';

export const favoritesReducer = (state= {isLoading : false, favorites: [], errorMessage: null} , action) => {
    switch( action.type){
        
        case ActionTypes.ADD_FAVORITE:
            const item = action.payload;
            const dish = state.favorites.find((x) => x === item);
            if (dish) {
              return {
                favorites: state.favorites.map((x) =>
                  x === dish ? item : x
                ),
              };
            }
            return { favorites: [...state.favorites, item] };
        
        case ActionTypes.DELETE_FAVORITE:
            return { favorites: state.favorites.filter((favorite) => favorite !== action.payload)}
        
        default: 
          return state;
    }
}


// if(state.some(el => el===action.payload)){
//     return state;
//     // If the dish is already in the favorites list, no need to add the dish to the favs list.
// }
// else{
//     return  state.concat(action.payload);//payload will contain the dishId of the dish that we want to add to favorites.
// }