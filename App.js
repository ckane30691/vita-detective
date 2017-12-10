import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './components/app_container';
import configureStore from './store/store';
import { Provider } from 'react-redux';

let store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
