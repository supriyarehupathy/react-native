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
          source={require('../assets/images/splashImage.png')}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 200,
    width: 200
  }
});
