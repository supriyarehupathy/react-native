import {
  StyleSheet
} from 'react-native';

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

export default styles;
