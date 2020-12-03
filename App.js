import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent';
import {NavigationContainer} from '@react-navigation/native'
import {ConfigureStore} from './redux/configureStore'



export default function App() {

  const store = ConfigureStore();

  return (
    <Provider store={store}>
    <NavigationContainer>
        <Main/>
    </NavigationContainer>
    </Provider>
  );
}


