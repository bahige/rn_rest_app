import React, {useState} from 'react'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetail';
import Menu from './MenuComponent';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'react-native-elements'


const MenuNavigator= (props) => {

const [dishes, setDishes] = useState(DISHES);
const [selectedDish, setSelectedDish] = useState(null);

const {navigation} =props;

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
          <Stack.Screen name="Menu" component={Menu} 
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            },
            headerLeft: ()=><Icon name='menu'size={24} color='white' style={{marginLeft:20}}
            onPress={()=>navigation.toggleDrawer()}/>}}
          />
       
          <Stack.Screen name="DishDetails" component={DishDetail}
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            }}}
          />
      
      </Stack.Navigator>

    )
}

export default MenuNavigator

