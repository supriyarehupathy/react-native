import {
  StyleSheet,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    ...Platform.select({
      ios: {
        color: 'white',
      },
      android: {
        color: 'black',
      }})
  },
  background: {
    backgroundColor: '#00A4D3'
  }
});

export default styles;
