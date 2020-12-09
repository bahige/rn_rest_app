import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Modal, Button} from 'react-native'
import {Card, Icon, Rating, Input} from 'react-native-elements';
import {baseUrl} from '../shared/baseUrl';
import { useDispatch, useSelector } from "react-redux";
import {fetchDishes} from '../redux/dish/dishActions';
import LoadingComponent from './LoadingComponent';
import { postComment } from '../redux/comments/commentActions';


const Dish = (props) => {

    const {dishId, onPress, toggleModalDish, modalVisibility} = props ;
    // const dishId = route.params.dishId;
    console.log("modalVisibility", modalVisibility);

    // const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(0);
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState("");
    const [date, setDate] = useState(Date.now())
   
    // const toggleModal = () => {
    //     setModalVisible(!modalVisible);
    // }

    const resetForm = () => {
        setRating(0);
        setAuthor('');
        setComment('');
        setDate(Date.now())
    }


    const dishesList = useSelector(state => state.dishReducer);
    const { isLoading: loading, errorMessage: error, dishes: dishes } = dishesList;

    const favoritesList = useSelector(state => state.favoritesReducer);
    const {  isLoading: loadingFavs, favorites: favorites, errorMessage: errorFavs } = favoritesList;

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchDishes())
    
    }, [])

    const addComment= (dishId) => {
        toggleModalDish();
        dispatch(postComment(dishId, rating, author, comment));
        setDate(date.toISOString);
        console.log(rating, author, comment, date);
        resetForm();
    }



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {loading ? (<LoadingComponent/>) : error ? (<View>{error} </View>) : <Card>
                        <Card.Title>{dishes[dishId].name}</Card.Title>
                        <Card.Image source={{ uri: baseUrl + dishes[dishId].image}}></Card.Image>
                        <Text style={{margin:10}}>
                            {dishes[dishId].description}
                        </Text>
                        <View style={styles.iconContainer}>
                        <Icon
                            raised //button like display of icon
                            reverse //reverse color
                            name={ favorites.some(el => el === dishId) ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => favorites.some(el => el === dishId) ? console.log('Already favorite') : onPress()}
                        />
                        <Icon
                            raised //button like display of icon
                            reverse //reverse color
                            name='pencil'
                            type='font-awesome'
                            color="#512DA8"
                            onPress={() => toggleModalDish()}
                        />
                        </View>
                    </Card>}

                    <Modal animationType="slide" transparent={false} visible={modalVisibility}>
                    <View style={styles.modal}>

                            <Rating ratingCount={5} imageSize={40} 
                            showRating fractions={0}
                            onFinishRating={(value)=> {setRating(value)}}
                            />
                        <View style={{marginVertical:10}}>
                            <Input style={styles.formItem} placeholder='Author'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={(value)=> setAuthor(value)}
                            />    
                        </View>
                        <View style={{marginVertical:10}}>
                            <Input style={styles.formItem} placeholder='Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            onChangeText={(value)=> setComment(value)}
                            />                              
                        </View>
                        <View style={{marginVertical:10}}>
                            <Button title="SUBMIT" color='#512DA8' 
                            onPress={()=>{ addComment(dishId)}}/>
                        </View>
                        <View style={{marginVertical:10}}>
                            <Button title="CANCEL" color='#A9A9A9' 
                            onPress={()=>{ toggleModalDish(); resetForm()}}/>                            
                        </View>
                    </View>
                    </Modal>
            
        </View>
    )
}


const styles = StyleSheet.create({
    iconContainer :{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    formItem:{
        fontSize: 18,
        flex: 1,
        height: 18,
        margin: 10
    },
    modal: {
        justifyContent: 'center',
        margin: 20,
     }, 
})
export default Dish
