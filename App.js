import React, { Component } from 'react'
import { Root } from "native-base"
import { Platform, StyleSheet } from 'react-native'

import SplashScreen from 'react-native-smart-splash-screen'
import LandingActivity from './src/pages/LandingActivity'


export default class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS !== 'ios') {
      SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 0,
        delay: 0,
      })
    }

  }
  render() {
    return (
      <Root>
        <LandingActivity />
      </Root>
    );
  }
}
