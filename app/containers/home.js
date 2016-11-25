'use strict';

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Platform,
  Image
} from 'react-native';
import {
  connect
} from 'react-redux';

import {bindActionCreators} from 'redux';
import CounterApp from './counterApp';
import Styles from './commonStyles';
import * as counterActions from '../actions/counterActions';

export default class Home extends Component {

  showCounter() {
    this.props.navigator.push({
      id: 'CounterApp'
    })
  }

  render() {
    return (
      <View style={[Styles.background, styles.background]}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/counter.png')}
          />
          <TouchableOpacity onPress={this.showCounter.bind(this)} style={styles.button}>
            <Text style={[Styles.textStyle, styles.textStyle]}> Welcome to react native</Text>
            <Text style={[Styles.textStyle, styles.textStyle]}> This is a sample </Text>
            <Text style={[Styles.textStyle, styles.textStyle]}> counter app using RN </Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
