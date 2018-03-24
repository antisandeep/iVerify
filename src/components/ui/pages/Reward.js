import React, { Component } from "react"
import { StyleSheet, Image } from "react-native"
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base"

export default class Reward extends Component{
    constructor(props){
        super(props)
        this._navigateToRedeemPoints = this._navigateToRedeemPoints.bind(this) 
    }
    _navigateToRedeemPoints(){    
        const { navigate } = this.props.navigation
        navigate('Redeem')
    }
    static navigationOptions = {
        title: 'Rewards',
    }
    render(){
        return(
            <Content padder >
                <Text style={{color:'orange',fontSize : 30,textAlign : 'center'}}> Congratulations! </Text>
                <Text style={{fontSize : 30,textAlign : 'center'}}> You are awarded </Text>
                <Text style={{color:'orange',fontWeight:'bold',fontSize : 40,textAlign : 'center'}}> 100 </Text>
                <Text style={{fontSize : 30,textAlign : 'center'}}> points! </Text>
                <Text style={{fontSize : 30,textAlign : 'center'}}> Total Reward Points :  </Text>
                <Text style={{color:'orange',fontSize : 30,textAlign : 'center'}}> 150 </Text>
                <Button block success onPress={this._navigateToRedeemPoints}>
                    <Text>Redeem Points</Text>                    
                </Button> 
            </Content>
        )
    }
}