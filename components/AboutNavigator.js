import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import { createStackNavigator } from '@react-navigation/stack';
import AboutComponent from './AboutComponent';
import {Icon} from 'react-native-elements';


const AboutNavigator= (props) => {


const {navigation} =props;

const Stack = createStackNavigator();


    return (
      <Stack.Navigator>
          <Stack.Screen name="About Us" component={AboutComponent} 
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

