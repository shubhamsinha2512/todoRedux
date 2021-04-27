import React, { useState } from 'react';
import {View} from 'react-native'
import Todo from './src/Todo';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(){
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <Todo />
      </View>
    </Provider>
  );
}

export default App;
