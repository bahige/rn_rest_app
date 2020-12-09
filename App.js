import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent';
import {NavigationContainer} from '@react-navigation/native'
import {ConfigureStore} from './redux/configureStore'
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import LoadingComponent from './components/LoadingComponent';



 const App = () =>  {

  const {store, persistor} = ConfigureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingComponent/>} persistor={persistor}>
    <NavigationContainer>
        <Main/>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;

