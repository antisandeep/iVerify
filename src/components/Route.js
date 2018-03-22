import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import LandingActivity from '../pages/LandingActivity';
import ProductInformation from '../pages/ProductInformation';
import Reward from '../pages/Reward';
  
const _Route = StackNavigator({
    Home: { screen: LandingActivity },
    ProductInfo: { screen: ProductInformation },
    Reward : {screen : Reward}
});

export default _Route;