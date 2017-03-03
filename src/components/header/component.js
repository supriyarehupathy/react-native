
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
import Conclusion from '../../startups/conclusion/index';
import CommonStyles from '../../styles/styles';
import Styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigator: React.PropTypes.object
  }
  
  goBack = () => {
    this.props.navigator.pop();
  }

  goForward = () => {
    this.props.navigator.push({
      id: 'Conclusion'
    })
  }

  getCurrentScreen = () => {
    const screens = this.props.navigator.getCurrentRoutes();
    return screens[screens.length-1];
  }

  render() {
    const currentScreen = this.getCurrentScreen().id;
    const leftArrow = '<';
    const rightArrow = '>';
    return (
      <View style={Styles.background}>
        { currentScreen == 'Counter' ?
          <TouchableOpacity onPress={this.goForward} style={Styles.button}>
            <Text style={[CommonStyles.textStyle,Styles.textStyle]}> {rightArrow} Counter</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={this.goBack} style={Styles.button}>
            <Text style={[CommonStyles.textStyle,Styles.textStyle]}> {leftArrow} Conclusion</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

}

