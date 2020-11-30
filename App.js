import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent';
import Drawer from './components/Drawer';
import {NavigationContainer} from '@react-navigation/native'



export default function App() {


  return (
    <NavigationContainer>
        {/* <Main/> */}
        <Drawer/>
    </NavigationContainer>
  );
}


