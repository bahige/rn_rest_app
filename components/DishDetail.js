import React, { useState, useEffect, useRef} from 'react'
import { ScrollView, Alert, PanResponder, View} from 'react-native';
import RenderDish from './Dish';
import RenderComments from './Comments';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDishes} from '../redux/dish/dishActions';
import {fetchComments} from '../redux/comments/commentActions';
import LoadingComponent from './LoadingComponent';
import {postFavorite} from '../redux/favorites/favoriteActions';
import * as Animatable from 'react-native-animatable';



const DishDetail = (props) => {

    const {route} = props ;
    const dishId = route.params.dishId;
 
    const [modalVisibility, setModalVisibility] = useState(false);


    const commentsList = useSelector(state => state.commentReducer);
    const { isLoading: loading, comments: comments, errorMessage: error} = commentsList;

    const favoritesList = useSelector(state => state.favoritesReducer);
    const {  isLoading: loadingFavs, favorites: favorites, errorMessage: errorFavs } = favoritesList;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchComments());
      }, [])


    const markFavorite= (dishId) => {
        dispatch(postFavorite(dishId));
    }

    const handleViewRef = useRef(null);

    const recognizeDrag = ({moveX, moveY, dx, dy}) => {
         return (dx < -200) ? true : false ;  
    }

    const recognizeComment = ({moveX, moveY, dx, dy}) => {
        return (dx > 200) ? true : false ;  
   }


   const toggleModal = () => {
    setModalVisibility(!modalVisibility);
}

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => { //gestureState contains info that we need to
            return true;                                    // recognize various aspects about the gestures.
        },                               // It will be called when the user's gestures begin on the screen.

        onPanResponderGrant: () =>{
            handleViewRef.current.rubberBand(1000)
            .then(endState => console.log(endState.finished ? 'finished' : 'cancelled'));
        },

        onPanResponderEnd: (e, gestureState)=> {
            console.log("The gesture worked!");
            if(recognizeDrag(gestureState)){ //It will recognize the specifivc gesture we want.
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add this dish to favorite?',
                    [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {favorites.some(el => el === dishId)? console.log('Already favorite') :  markFavorite(dishId)}},
                    ],
                    { cancelable: false }
                );
                return true;
            } else if(recognizeComment(gestureState)){
                console.log("modalVisibility", modalVisibility);
                toggleModal();
                return true;
            }
    
        } //It will be called when user lifts his finger after executing gesture.
    })


    return (
        <ScrollView>
            <View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}
        {...panResponder.panHandlers} ref={handleViewRef}> 
            <RenderDish 
            dishId={dishId} 
            onPress={() => markFavorite(dishId)}
            toggleModalDish = { () => toggleModal()}
           modalVisibility = {modalVisibility}
            />
        </Animatable.View>

            {loading ? (<LoadingComponent/>): error ? 
            (<View>{error}</View>) : 
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>

            <RenderComments comments={comments.filter((comment) => comment.dishId === dishId)} />
            
        </Animatable.View>  }

        </View>
        </ScrollView>
    )
}


export default DishDetail
