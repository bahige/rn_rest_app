import React, {useState} from 'react'
import { View, Text, FlatList,Button } from 'react-native'
import { Tile } from "react-native-elements";
import {baseUrl} from '../shared/baseUrl';
import {useSelector, useDispatch} from 'react-redux';
import LoadingComponent from './LoadingComponent';
import * as Animatable from 'react-native-animatable';



const Menu = (props) => {

   const {navigation} = props;

  const dishesList = useSelector(state => state.dishReducer);
  const { isLoading, dishes, errorMessage } = dishesList;

   const renderMenuItem = ({ item, index }) => (
    <Animatable.View duration={2000}  animation="fadeInRightBig">
        <Tile
          key={index}
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigation.navigate('DishDetails', { dishId: item.id })}
          imageSrc={{ uri: baseUrl + item.image}} />
    </Animatable.View>
  )

    return (
      
      <View style={{marginTop:"10%", marginBottom:"10%"}}>
       {isLoading ? <LoadingComponent/> : errorMessage ? 
       <View>{errorMessage}</View> : 
       <FlatList data={dishes} 
        renderItem={renderMenuItem}
        keyExtractor={item=>item.id.toString()}/>}
      </View> 
    )
}

export default Menu


//onPress={() => navigation.navigate('DishDetails', {  params: {dishId: item.id}})}
//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}