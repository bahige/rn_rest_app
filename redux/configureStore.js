import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishReducer, singleDishReducer} from '../redux/dish/dishReducer';
import {leaderReducer} from '../redux/leaders/leaderReducer';
import {promoReducer} from '../redux/promos/promoReducer';
import {commentReducer} from '../redux/comments/commentReducer';


const reducer = combineReducers({
    dishReducer: dishReducer,
    leaderReducer: leaderReducer,
    promoReducer: promoReducer,
    commentReducer: commentReducer,
    singleDishReducer:singleDishReducer   
})


const store = createStore(reducer, applyMiddleware(thunk,logger));

export default store; 