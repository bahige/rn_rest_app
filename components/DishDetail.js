import React, {useState} from 'react'
import { ScrollView } from 'react-native'
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import RenderDish from './Dish';
import RenderComments from './Comments';
import {useSelector, useDispatch} from 'react-redux'



const DishDetail = (props) => {

    const {route} = props ;
    const dishId = route.params.dishId;

    // const [dishes, setDishes] = useState(DISHES);
    // const [comments, setComments] = useState(COMMENTS);
    const dishesList = useSelector(state => state.dishReducer);
    const { dishes } = dishesList;

    const commentsList = useSelector(state => state.commentReducer);
    const {  comments } = commentsList;

    const [favorites, setFavorites] = useState([]);

    console.log("dishId",dishId);

    const markFavorite= (dishId) => {
        setFavorites(favorites.concat(dishId));
    }

    return (
        <ScrollView>
            <RenderDish dishes={dishes} dishId={dishId} 
            favorite={favorites.some(el => el === dishId)}
            onPress={() => markFavorite(dishId)} 
            />
            <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />
            
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
