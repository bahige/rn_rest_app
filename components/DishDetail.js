import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native';
import RenderDish from './Dish';
import RenderComments from './Comments';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDishes} from '../redux/dish/dishActions';
import {fetchComments} from '../redux/comments/commentActions';




const DishDetail = (props) => {

    const {route} = props ;
    const dishId = route.params.dishId;



    const commentsList = useSelector(state => state.commentReducer);
    const { isLoading: loading, comments: comments, errorMessage: error} = commentsList;


    console.log('comments of dish', comments);
    console.log('dishId', typeof dishId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchComments());
       
      }, [])

    const [favorites, setFavorites] = useState([]);

    const markFavorite= (dishId) => {
        setFavorites(favorites.concat(dishId));
    }

    return (
        <ScrollView>
            <RenderDish 
            // dish={dishes.filter((dish)=>dish.featured)[+dishId]}
            // dishes={dishes} 
            dishId={dishId} 
            favorite={favorites.some(el => el === dishId)}
            onPress={() => markFavorite(dishId)} 
            />

            {loading ? (<View>Loading</View> ): error ? 
            (<View>{error}</View>) : 
            <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />}
            
        </ScrollView>
    )
}


// function RenderDish(props) {

//     const dish = props.dish;
    
//         if (dish != null) {
//             return(
//                 <Card
//                 featuredTitle={dish.name}
//                 image={require('./images/uthappizza.png')}>
//                     <Text style={{margin: 10}}>
//                         {dish.description}
//                     </Text>
//                 </Card>
//             );
//         }
//         else {
//             return(<View></View>);
//         }
// }

// function DishDetail(props) {
//     return(<RenderDish dish={props.dish} />);
// }
export default DishDetail
