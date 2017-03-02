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
import Counter from '../counter/index';
import CommonStyles from '../../styles/styles';
import Styles from './styles';

export default class Home extends Component {
  static propTypes = {
    navigator: React.PropTypes.array
  }

  showCounter = () => {
    this.props.navigator.push({
      id: 'Counter'
    })
  }

  render() {
    return (
      <View style={[CommonStyles.background, Styles.background]}>
        <View style={Styles.content}>
          <Image
            source={require('../assets/images/counter.png')}
          />
          <TouchableOpacity onPress={this.showCounter} style={Styles.button}>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}> Welcome to react native</Text>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}> This is a sample </Text>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}> counter app using RN </Text>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}> Tap on this text to start the app </Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }

}