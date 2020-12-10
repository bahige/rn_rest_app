import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import {Icon} from 'react-native-elements'


const HomeNavigator= (props) => {


const {navigation} =props;

const Stack = createStackNavigator();



    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            },
            headerLeft: ()=><Icon name='menu'size={24} color='white' style={{marginLeft:20}}
            onPress={()=>navigation.toggleDrawer()}/>}}
          /> 
      </Stack.Navigator>

    )
}

export default HomeNavigator

