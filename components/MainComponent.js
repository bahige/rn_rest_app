import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetail';
import Menu from './MenuComponent';
import { createStackNavigator } from '@react-navigation/stack';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import Home from './Home';

const Main= () => {

const [dishes, setDishes] = useState(DISHES);
const [selectedDish, setSelectedDish] = useState(null);

const Stack = createStackNavigator();


const onDishSelect = (dishId) =>{
    setSelectedDish(dishId);
    console.log(dishId);
}


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
            }}}
          />
          <Stack.Screen name="Menu" component={Menu} 
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            }}}
          />
          <Stack.Screen name="AboutUs" component={AboutComponent}
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            }}}
          />
          <Stack.Screen name="DishDetails" component={DishDetail}
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            }}}
          />
          <Stack.Screen name="Contact Us" component={ContactComponent}
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            }}}
          />
      
      </Stack.Navigator>

    )
}

export default Main

