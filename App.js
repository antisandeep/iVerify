 
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/modules/login/Main';

const instructions = Platform.select({
  ios: ' Hello Akash',
  android: 'Hello Sandeep',
});
 
export default class App extends Component {
  render() {
    return (
       <Main />
    );
  }
}