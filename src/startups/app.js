import React, {
  Component
} from 'react';
import {
  CreateStore,
  ApplyMiddleware,
  CombineReducers
} from 'redux';

import {
  Navigator,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import {
  Provider
} from 'react-redux';

import Thunk from 'redux-thunk';

import * as reducers from '../store/reducers';
import Counter from './counter/index';
import Home from './home/index';
import SplashScreen from './splashScreen/index';
import Conclusion from './conclusion/index';

const createStoreWithMiddleware = ApplyMiddleware(Thunk)(CreateStore);
const reducer = CombineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator
           initialRoute={{id: 'SplashScreen', name: 'Index'}}
           renderScene={this.renderScene}
           configureScene={(route) => {
             if (route.sceneConfig) {
               return route.sceneConfig;
             }
             return Navigator.SceneConfigs.FloatFromRight;
           }} />

      </Provider>
    );
  }


  renderScene = (route, navigator) => {
    var routeId = route.id;
    if (routeId === 'Counter') {
      return (
        <Counter navigator={navigator} />
      );
    }
    if (routeId === 'Home') {
      return (
        <Home
          navigator={navigator} />
      );
    }
    if (routeId === 'SplashScreen') {
      return (
        <SplashScreen
            navigator={navigator} />
      );
    }
    if (routeId === 'Conclusion') {
      return (
        <Conclusion
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}> Error</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
