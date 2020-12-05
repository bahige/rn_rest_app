import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import {Card, Icon} from 'react-native-elements';
import {baseUrl} from '../shared/baseUrl';
import { useDispatch, useSelector } from "react-redux";
import {fetchDishes} from '../redux/dish/dishActions';
import LoadingComponent from './LoadingComponent';




const Dish = (props) => {

    const {dishId, favorite, onPress} = props ;
    // const dishId = route.params.dishId;

    console.log("dish of dish", dishId);

    const dishesList = useSelector(state => state.dishReducer);
    const { isLoading: loading, errorMessage: error, dishes: dishes } = dishesList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDishes())
    
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {loading ? (<LoadingComponent/>) : error ? (<View>{error} </View>) : <Card>
                        <Card.Title>{dishes[dishId].name}</Card.Title>
                        {/* <Card.Title><Text>{dish.name}</Text></Card.Title> */}
                        <Card.Image source={{ uri: baseUrl + dishes[dishId].image}}></Card.Image>
                        <Text style={{margin:10}}>
                            {dishes[dishId].description}
                        </Text>
                        <Icon
                            raised //button like display of icon
                            reverse //reverse color
                            name={ favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => favorite ? console.log('Already favorite') : onPress()}
                        />
                    </Card>}
            
        </View>
    )
}

export default Dish
