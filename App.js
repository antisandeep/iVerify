import React, { Component } from 'react'; 
import { Root } from "native-base"
// import LandingActivity from './src/pages/LandingActivity';

import Login from './src/pages/Login';
import SplashScreen from 'react-native-smart-splash-screen';


export default class App extends Component {
  constructor(props) {
    super(props);
    //  SplashScreen.close({
    //     animationType: SplashScreen.animationType.scale,
    //     duration: 0,
    //     delay: 0,
    //  })
  }
  render() {
    return (
      <Root>
        <Login />
      </Root>
    );
  }
}
 