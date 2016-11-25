import React, {
  Component
} from 'react';
import {
  createStore,
  applyMiddleware,
  combineReducers
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
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';
import Home from './home';
import SplashScreen from './splashScreen';
import Conclusion from './conclusion';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
           initialRoute={{id: 'SplashScreen', name: 'Index'}}
           renderScene={this.renderScene.bind(this)}
           configureScene={(route) => {
             if (route.sceneConfig) {
               return route.sceneConfig;
             }
             return Navigator.SceneConfigs.FloatFromRight;
           }} />

      </Provider>
    );
  }


    renderScene(route, navigator) {
      var routeId = route.id;
      if (routeId === 'CounterApp') {
        return (
          <CounterApp navigator={navigator} />
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
