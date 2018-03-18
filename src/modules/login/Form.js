import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { width, height, totalSize } from 'react-native-dimension';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import UserInput from './UserInput';

export default class Form extends Component {
    constructor(props) {
      super(props);           
  }
  render() {
    return (
        <UserInput />

    );
  }
}
 