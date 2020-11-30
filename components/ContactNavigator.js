import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'react-native-elements'
import ContactComponent from './ContactComponent';


const ContactNavigator= (props) => {


const {navigation} =props;

const Stack = createStackNavigator();



    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
      <Stack.Navigator>
          <Stack.Screen name="Contact Us" component={ContactComponent} 
            options={{ headerStyle:{backgroundColor:"#512DA8"},
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: "#fff"            
            },
            headerLeft: ()=><Icon name='menu'size={24} color='white' 
            onPress={()=>navigation.toggleDrawer()}/>}}
          /> 
      </Stack.Navigator>

    )
}

export default ContactNavigator

