import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'; 
import ProductInformation from '../pages/ProductInformation';
import Reward from '../pages/Reward';
import RedeemPoints from '../pages/RedeemPoints';
import Login from '../pages/Login';
import LandingActivity from '../pages/LandingActivity';
  
     
const LoginRoute = StackNavigator({
    Home: { screen: Login,
        navigationOptions: {
            header: null,
          }
    },
    MainActivity: { screen: LandingActivity,
        navigationOptions: {
            header: null,
          }
    },
    ProductInfo: { screen: ProductInformation },
    Reward : {screen : Reward},
    Redeem: {screen: RedeemPoints}
});

export default LoginRoute;