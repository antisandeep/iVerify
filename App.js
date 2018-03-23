import React, { Component } from 'react'; 
import { Root } from "native-base"  
import SplashScreen from 'react-native-smart-splash-screen';
import { BackHandler } from 'react-native';
import LoginRoute from './src/components/Route';
import {StackNavigator} from 'react-navigation';


export default class App extends Component {
  constructor(props) {
    super(props);
      SplashScreen.close({
         animationType: SplashScreen.animationType.scale,
         duration: 0,
         delay: 0,
      }) 
  }
  render() {
    return (
      <Root>
        <LoginRoute />
      </Root>
    );
  }
}
 