import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';
import { Icon } from 'react-native-elements';


const LogInRegTabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator  
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            labelStyle:{fontSize:14},
            adaptive:true,
            activeBackgroundColor:'#9575CD',
            inactiveBackgroundColor: '#D1C4E9'
          }}
          >
            <Tab.Screen name="Login" component={LoginNavigator}
            options={
                {tabBarIcon: ({tintColor, focused}) =>
                <Icon name='sign-in' type='font-awesome' size={22}
                color={tintColor}></Icon>}}>
                </Tab.Screen>
            <Tab.Screen name="Register" component={RegisterNavigator}
               options={
                {tabBarIcon: ({tintColor, focused}) => 
                <Icon name='user-plus' type='font-awesome' size={22}
                color={tintColor} ></Icon>,
                //tabBarBadge:3
                 }}>
                </Tab.Screen>
        </Tab.Navigator>
    )
}

export default LogInRegTabNavigator
