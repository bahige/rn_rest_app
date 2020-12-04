import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent';
import {NavigationContainer} from '@react-navigation/native'
import store from './redux/configureStore'
import { Provider } from "react-redux";



export default function App() {


  return (
    <Provider store={store}>
    <NavigationContainer>
        <Main/>
    </NavigationContainer>
    </Provider>
  );
}


