'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import Header from '../components/header';
import * as counterActions from '../actions/counterActions';
import {
  connect
} from 'react-redux';
import Styles from './commonStyles';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={[Styles.background, styles.background]}>
        <Header navigator={this.props.navigator} currentScreen={this.props.navigator.title}/>
        <Counter
          counter={state.count}
          {...actions} />
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
