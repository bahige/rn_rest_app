import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import Home from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './MainComponent';

const Drawer= () => {

  const Drawer = createDrawerNavigator();



    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
       
        // {/* <Main/> */}
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}
            options={{title:"Home", drawerLabel: "Home"}} />
            <Drawer.Screen name="Main" component={Main}
            options={{title:"Main", drawerLabel: "Menu"}} />
          </Drawer.Navigator>

    )
}

export default Drawer

