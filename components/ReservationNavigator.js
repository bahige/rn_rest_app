import React, {useState} from 'react'
import Reservation from './ReservationComponent';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'react-native-elements'


const ReservationNavigator= (props) => {

const {navigation} =props;

const Stack = createStackNavigator();



    return (
      <Stack.Navigator>
          <Stack.Screen name="Reserve A Table" component={Reservation} 
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

export default ReservationNavigator;

