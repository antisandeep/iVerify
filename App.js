import React, { Component } from 'react'
import { Root } from "native-base"
import { Platform, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-smart-splash-screen'
import { StackNavigator } from 'react-navigation'
import { BackHandler } from 'react-native';

import LoginRoute from './src/components/Route';

import storeFactory from './src/store'
import LandingActivity from './src/components/ui/pages/LandingActivity'
import Login from './src/components/ui/pages/Login'
import initialState from './src/initialState.json'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Landing: {
      screen: LandingActivity,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  constructor(props) {
    super(props)
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
      <Provider store={storeFactory(initialState)} >
        <Root>
          <RootStack/>
        </Root>
      </Provider>
    )

  }
}