import React, { Component } from 'react'
import { Root } from "native-base"
import { Platform, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-smart-splash-screen'
import { StackNavigator } from 'react-navigation'
import { BackHandler } from 'react-native'

import LoginRoute from './src/components/Route';

import storeFactory from './src/store'
import LandingActivity from './src/components/ui/pages/LandingActivity'
import Login from './src/components/ui/pages/Login'
import ProductInformation from './src/components/ui/pages/ProductInformation'
import Reward from './src/components/ui/pages/Reward'
import RedeemPoints from './src/components/ui/pages/RedeemPoints'

import initialState from './src/initialState.json'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Landing: {
      screen: LandingActivity,
      navigationOptions: {
        header: null,
      }
    },

    ProductInfo: { screen: ProductInformation },
    Reward: { screen: Reward },
    Redeem: { screen: RedeemPoints }
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
          <RootStack />
        </Root>
      </Provider>
    )

  }
}