'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../../components/counter/component';
import Header from '../../components/header/component';
import * as CounterActions from '../../store/actions/counterActions';
import {
  connect
} from 'react-redux';
import CommonStyles from '../../styles/styles';
import Styles from './styles';

const CounterApp = ({state, actions}) => {
  return (
    <View style={[CommonStyles.background, Styles.background]}>
      <Header navigator={this.props.navigator} currentScreen={this.props.navigator.title}/>
      <Counter
        counter={state.count}
        {...actions} />
    </View>
  );
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(CounterActions, dispatch)
  })
)(CounterApp);
