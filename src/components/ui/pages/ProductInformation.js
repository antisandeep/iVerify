import React, { Component } from "react";
import { StyleSheet, Image,TouchableOpacity,Dimensions } from "react-native";
import styles from './../components/CustomStyleSheet'; 
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
} from "native-base";
const deviceWidth = Dimensions.get("window").width; 

const award = require("./../images/award.png");



var ProductName ='';
var ProductImgUrl='' ;
var ProductQty=0 ;
var ProductCost ='';
var MnufacturedOn ='' ;

export default class ProductInformation extends Component{
static navigationOptions = {
    title: 'Product Information',
};
constructor(props){
  super(props);
  const { params } = this.props.navigation.state;
   ProductName = params ? params.ProductName : null;
   ProductImgUrl = params ? params.ProductImgUrl : null;
   ProductQty = params ? params.ProductQty : null;
   ProductCost = params ? params.ProductCost : null;
   MnufacturedOn = params ? params.MnufacturedOn : null;
   IsGenuineProduct = params ? params.IsGenuineProduct : null;
   this._navigateToReward = this._navigateToReward.bind(this); 
}
_navigateToReward(){    
  const { navigate } = this.props.navigation;
  navigate('Reward');
}
    render(){
      return(
        
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <TouchableOpacity onPress={this._navigateToReward}>  
                  <Thumbnail source={award} />
                </TouchableOpacity>
                <Body>
                  <Text style={{ fontSize: 25,fontWeight:'bold'}}>{ProductName}</Text> 
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
                source={require("./../images/don_Julio.jpg")}
              />
            </CardItem>

            <CardItem>
            <Body>
              <Text>
                  Manufactured on : {MnufacturedOn}
              </Text>            
              <Text>
                  Pack of : {ProductQty}
              </Text>             
              <Text>
                  MRP : {ProductCost}
              </Text>
            </Body>
            </CardItem>
          </Card>
        </Content>
      
      );
    }
}