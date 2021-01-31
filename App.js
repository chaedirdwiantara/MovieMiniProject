import React from 'react'
import { View, Text } from 'react-native'

import Home from './src/Features/Home/Home';
import Login from './src/Features/Login/Login';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './src/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <View style={{flex:1, alignItems:'center', justifyContent: 'space-around'}}>
          <Home />
        </View>
      </PersistGate>      
    </Provider>    
  )
}
