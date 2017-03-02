'use strict';

import React, {
  Component
} from 'react';
import {
  View,
  StatusBar,
  Image,
  BackAndroid,
  StyleSheet
} from 'react-native';
import Home from './home';

export default class SplashScreen extends Component {
  static propTypes = {
    navigator: React.PropTypes.array
  }

  componentWillMount() {
    setTimeout (() => {
       this.props.navigator.replace({
           id: 'Home'
       });
     }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image
          source={require('../assets/images/splash.png')}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 100
  }
});
