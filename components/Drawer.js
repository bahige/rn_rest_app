import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import Home from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './MainComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import DishDetail from './DishDetail'


const Stack= () => {
  
  const Stack = createStackNavigator();
  
      return (
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

const Drawer= () => {

  const Drawer = createDrawerNavigator();

    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
       
        // {/* <Main/> */}
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Stack}
            options={{title:"Home", drawerLabel: "Home"}} />
            <Drawer.Screen name="About Us" component={AboutComponent}
            options={{title:"About", drawerLabel: "About Us"}} />
            <Drawer.Screen name="Menu" component={Menu}
            options={{title:"Menu", drawerLabel: "Menu"}} />
            <Drawer.Screen name="Contact" component={ContactComponent}
            options={{title:"Contact", drawerLabel: "Contact Us"}} />
          </Drawer.Navigator>

    )
}

export default Drawer

