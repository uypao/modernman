import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import DrawerNavigation from './router/drawer/DrawerNavigation';
import AppReducer from './reducers'

class App extends Component {
  store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));
  render(){
    return(
      <Provider store={this.store}>
        <DrawerNavigation />
      </Provider>
    )
  }

}

export default App;
