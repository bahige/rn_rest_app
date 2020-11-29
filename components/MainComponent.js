import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetail';
import Menu from './MenuComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Main= () => {

const [dishes, setDishes] = useState(DISHES);
const [selectedDish, setSelectedDish] = useState(null);

const Stack = createStackNavigator();


const onDishSelect = (dishId) =>{
    setSelectedDish(dishId);
    console.log(dishId);
}

console.log(dishes);

    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
      <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} 
          options={{ headerStyle:{backgroundColor:"#512DA8"},
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#fff"            
        }}}/>
          <Stack.Screen name="DishDetails" component={DishDetail}
                   options={{ headerStyle:{backgroundColor:"#512DA8"},
                   headerTintColor: '#fff',
                   headerTitleStyle: {
                     color: "#fff"            
            }}}/>
      </Stack.Navigator>
    )
}

export default Main

