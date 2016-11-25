'use strict';

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Platform
} from 'react-native';
import Styles from './commonStyles';
import Header from '../components/header';

export default class Conclusion extends Component {

  render() {
    return (
      <View style={[Styles.background, styles.background]}>
        <Header navigator={this.props.navigator}/>
        <View style={[styles.contentBackground]}>
          <Text style={[Styles.textStyle, styles.textStyle]}> Thanks All !!!</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  contentBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});
