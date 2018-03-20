import React, { Component } from 'react'; 
import BarCodeScan from './src/pages/BarCodeScan';
import SplashScreen from 'react-native-smart-splash-screen';


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
      <BarCodeScan />
    );
  }
}
 