import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishReducer} from '../redux/dish/dishReducer';
import {leaderReducer} from '../redux/leaders/leaderReducer';
import {promoReducer} from '../redux/promos/promoReducer';
import {commentReducer} from '../redux/comments/commentReducer';
import {favoritesReducer} from '../redux/favorites/favoriteReducer';


const reducer = combineReducers({
    dishReducer: dishReducer,
    leaderReducer: leaderReducer,
    promoReducer: promoReducer,
    commentReducer: commentReducer,
    favoritesReducer: favoritesReducer,
})


const store = createStore(reducer, applyMiddleware(thunk));

export default store; 