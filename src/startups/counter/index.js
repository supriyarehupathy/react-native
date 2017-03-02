'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {BindActionCreators} from 'redux';
import Counter from '../../components/counter';
import Header from '../components/header';
import * as CounterActions from '../actions/counterActions';
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
    actions: BindActionCreators(CounterActions, dispatch)
  })
)(CounterApp);
