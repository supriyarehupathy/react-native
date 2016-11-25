
import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import Conclusion from '../containers/conclusion';
import Styles from '../containers/commonStyles';

export default class Header extends Component {

  goBack() {
    this.props.navigator.pop();
  }

  goForward() {
    this.props.navigator.push({
      id: 'Conclusion'
    })
  }

  getCurrentScreen() {
    const screens = this.props.navigator.getCurrentRoutes();
    return screens[screens.length-1];
  }

  render() {
    const currentScreen = this.getCurrentScreen().id;
    const leftArrow = '<';
    const rightArrow = '>';
    return (
      <View style={styles.background}>
        { currentScreen == 'CounterApp' ?
          <TouchableOpacity onPress={this.goForward.bind(this)} style={styles.button}>
            <Text style={[Styles.textStyle,styles.textStyle]}> {rightArrow} Counter</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.button}>
            <Text style={[Styles.textStyle,styles.textStyle]}> {leftArrow} Conclusion</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  background: {
    padding: 10,
    flex: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#006080'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
