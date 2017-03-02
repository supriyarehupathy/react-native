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
import CommonStyles from '../../styles/styles';
import Styles from './styles';
import Header from '../components/header';

export default class Conclusion extends Component {

  render() {
    return (
      <View style={[CommonStyles.background, Styles.background]}>
        <Header navigator={this.props.navigator}/>
        <View style={[Styles.contentBackground]}>
          <Text style={[CommonStyles.textStyle, Styles.textStyle]}> Thanks All !!!</Text>
        </View>
      </View>
    );
  }

}
