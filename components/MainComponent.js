import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MenuNavigator from './MenuNavigator';
import {Icon} from 'react-native-elements'
import AboutNavigator from './AboutNavigator';
import HomeNavigator from './HomeNavigator';
import ContactNavigator from './ContactNavigator';
import ReservationNavigator from './ReservationNavigator';





const MainComponent= () => {


  const Drawer = createDrawerNavigator();

  const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>

    </DrawerContentScrollView>

  );


    return (
        // <View>
        //     <Menu dishes={dishes} onPress={(dishId)=>onDishSelect(dishId)}></Menu> 
        //     <DishDetail dish={dishes.filter((dish)=>dish.id===selectedDish)[0]}></DishDetail>
        // </View>
       
       <Drawer.Navigator   drawerStyle={{ backgroundColor: '#D1C4E9' }}
       drawerContent={props => <CustomDrawerContentComponent {...props} />}>
            <Drawer.Screen name="Home" component={HomeNavigator}
            options={{title:"Home", drawerLabel: "Home", 
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='home'
                type='font-awesome'            
                size={24}
                color={tintColor}
              />
            ),}} />
            <Drawer.Screen name="About Us" component={AboutNavigator}
            options={{title:"About", drawerLabel: "About Us",
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='info-circle'
                type='font-awesome'            
                size={24}
                color={tintColor}
              />
            ),
            }} />
            <Drawer.Screen name="Menu" component={MenuNavigator}
            options={{title:"Menu", drawerLabel: "Menu",
            drawerIcon:({tintColor,focused}) =>(
              <Icon 
              name="list" 
              type='font-awesome' 
              size={24} 
              color={tintColor}/>
            ),
            }} />
            <Drawer.Screen name="Contact" component={ContactNavigator}
            options={{title:"Contact", drawerLabel: "Contact Us",
            drawerIcon:({tintColor, focused}) =>(
              <Icon
              name='address-card'
              type="font-awesome"
              size={22}
              color={tintColor}/>
            ),
          }} />
            <Drawer.Screen name="Reservation" component={ReservationNavigator}
            options={{title:"Reserve Table", drawerLabel: "Reserve Table",
            drawerIcon:({tintColor, focused}) =>(
              <Icon
              name='cutlery'
              type="font-awesome"
              size={24}
              color={tintColor}/>
            ),
          }} />
          </Drawer.Navigator>

    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default MainComponent

