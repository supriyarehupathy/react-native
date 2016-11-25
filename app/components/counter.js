import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from '../containers/commonStyles';

export default class Counter extends Component {

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={styles.background}>
        <Text style={[Styles.textStyle, styles.textStyle, {fontSize: 200}]}>{counter}</Text>
        <View style={styles.contentBackground}>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text style={[Styles.textStyle, styles.textStyle]}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Text style={[Styles.textStyle, styles.textStyle]}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 30,
    padding: 10,
    backgroundColor: '#006080',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentBackground: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
