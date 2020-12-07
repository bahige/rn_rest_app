import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native';
import RenderDish from './Dish';
import RenderComments from './Comments';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDishes} from '../redux/dish/dishActions';
import {fetchComments} from '../redux/comments/commentActions';
import LoadingComponent from './LoadingComponent';
import {postFavorite} from '../redux/favorites/favoriteActions';


const DishDetail = (props) => {

    const {route} = props ;
    const dishId = route.params.dishId;



    const commentsList = useSelector(state => state.commentReducer);
    const { isLoading: loading, comments: comments, errorMessage: error} = commentsList;

    const favs = useSelector(state => state.favoritesReducer);
    const { favorites} = commentsList;

    // const [favorites, setFavorites] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchComments());
      }, [])


    const markFavorite= (dishId) => {
        dispatch(postFavorite(dishId));
        console.log("favs", favorites);
        console.log("dishId", dishId);
    }

    // const markFavorite= (dishId) => {
    //     setFavorites(favorites.concat(dishId));
    // }

    return (
        <ScrollView>
            <RenderDish 
            // dish={dishes.filter((dish)=>dish.featured)[+dishId]}
            // dishes={dishes} 
            dishId={dishId} 
            // favorite={favorites.some(el => el === dishId)}
            onPress={() => markFavorite(dishId)} 
            />

            {loading ? (<LoadingComponent/>): error ? 
            (<View>{error}</View>) : 
            <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />}
            
        </ScrollView>
    )
}


export default DishDetail
