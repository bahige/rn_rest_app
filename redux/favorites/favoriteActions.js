import * as ActionTypes from '../actionTypes';

export const postFavorite = (dishId)  => async (dispatch) => {
    try {
        dispatch(favoritesLoading());
        // const  {data}  = await axios.get(baseUrl + 'dishes/' + dishId);
        setTimeout(() => {
            dispatch(addFavorite(dishId));
        }, 2000); 
    } catch (error) {
        dispatch(favoritesFailed(error));
      }

};

export const addFavorite = (dishId) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: dishId
});

export const deleteFavorite = (dishId) => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: dishId
});

export const favoritesLoading = () =>{
    return {
    type:ActionTypes.FAVORITE_LOADING
}}

export const favoritesFailed = (errorMessage)=>{
    return {
        type: ActionTypes.FAVORITE_FAILED,
        payload: errorMessage
    }
}