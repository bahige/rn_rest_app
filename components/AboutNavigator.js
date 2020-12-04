import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import { createStackNavigator } from '@react-navigation/stack';
import AboutComponent from './AboutComponent';
import {Icon} from 'react-native-elements';


const AboutNavigator= (props) => {

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
          <Stack.Screen name="AboutUs" component={AboutComponent} 
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

export default AboutNavigator

