import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CommonStyles from '../../styles/styles';
import Styles from './styles';

export default class Counter extends Component {

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={Styles.background}>
        <Text style={[CommonStyles.textStyle, Styles.textStyle, {fontSize: 200}]}>{counter}</Text>
        <View style={Styles.contentBackground}>
          <TouchableOpacity onPress={decrement} style={Styles.button}>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={increment} style={Styles.button}>
            <Text style={[CommonStyles.textStyle, Styles.textStyle]}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
