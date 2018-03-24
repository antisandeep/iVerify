import React, { Component } from "react"
import { StyleSheet, Image,TouchableOpacity,Dimensions } from "react-native"

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
import Images from '@assets/images'
import styles from '../common/CustomStyleSheet'

const deviceWidth = Dimensions.get("window").width 


export default class ProductInformation extends Component{
static navigationOptions = {
    title: 'Product Information',
}
constructor(props){
  super(props)
   
   this._navigateToReward = this._navigateToReward.bind(this) 
}
_navigateToReward(){    
  const { navigate } = this.props.navigation
  navigate('Reward')
}
    render(){
      const { params } = this.props.navigation.state

      return(
        
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <TouchableOpacity onPress={this._navigateToReward}>  
                  <Thumbnail source={Images.awardImage} />
                </TouchableOpacity>
                <Body>
                  <Text style={{ fontSize: 25,fontWeight:'bold'}}>{params.Name}</Text> 
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: deviceWidth-10,
                  height: 400,
                  flex: 1
                }}
                source={Images.bottleLogo}
              />
            </CardItem>

            <CardItem>
            <Body>
              <Text>
                  Manufactured on : {params.Manufacturing_Date__c}
              </Text>            
              <Text>
                  Pack of : {params.Quantity__c}
              </Text>             
              <Text>
                  MRP : {params.Price__c}
              </Text>
            </Body>
            </CardItem>
          </Card>
        </Content>
      
      )
    }
}