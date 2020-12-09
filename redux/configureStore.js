import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishReducer} from '../redux/dish/dishReducer';
import {leaderReducer} from '../redux/leaders/leaderReducer';
import {promoReducer} from '../redux/promos/promoReducer';
import {commentReducer} from '../redux/comments/commentReducer';
import {favoritesReducer} from '../redux/favorites/favoriteReducer';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';



export const ConfigureStore = () => {
// const reducer = combineReducers({
//     dishReducer: dishReducer,
//     leaderReducer: leaderReducer,
//     promoReducer: promoReducer,
//     commentReducer: commentReducer,
//     favoritesReducer: favoritesReducer,
// })


const config = {
    key:'root', 
    storage: AsyncStorage,
    debug:true
}

const persistReducer = persistCombineReducers(config, {
    dishReducer: dishReducer,
    leaderReducer: leaderReducer,
    promoReducer: promoReducer,
    commentReducer: commentReducer,
    favoritesReducer: favoritesReducer,
})



const store = createStore(persistReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

return {persistor, store}

}