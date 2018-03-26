import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'; 
import ProductInformation from '../pages/ProductInformation';
import Reward from '../pages/Reward';
import RedeemPoints from '../pages/RedeemPoints';
import Login from '../pages/Login';
import LandingActivity from '../pages/LandingActivity';
import RetailerInfo from '../pages/RetailerInfo';
  
     
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
    Redeem: {screen: RedeemPoints},
    RetailerInformation : {screen :  RetailerInfo,
        navigationOptions: {
            title: 'Retailer Information',
          }
    }
});

export default LoginRoute;