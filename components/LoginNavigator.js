import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'react-native-elements'
import LoginComponent from './LoginComponent';
import LogInRegTabNavigator from './LogInRegTabNavigator';


const LoginNavigator= (props) => {

const {navigation} =props;

const Stack = createStackNavigator();



    return (
      <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginComponent} 
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



export default LoginNavigator;

