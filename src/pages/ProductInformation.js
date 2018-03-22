import React, { Component } from "react";
import { StyleSheet, Image,TouchableOpacity } from "react-native";
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
 

const award = require("./../images/award.png");


const { params } = this.props.navigation.state;
const ProductName = params ? params.ProductName : null;
const ProductImgUrl = params ? params.ProductImgUrl : null;
const ProductQty = params ? params.ProductQty : null;
const ProductCost = params ? params.ProductCost : null;
const MnufacturedOn = params ? params.MnufacturedOn : null;
const IsGenuineProduct = params ? params.IsGenuineProduct : null;

export default class ProductInformation extends Component{
    render(){
      return(
        
        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Reward')}>  
                    <Thumbnail source={award} />
                </TouchableOpacity> 
                <Body>
                  <Text>{ProductName}</Text> 
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={ProductImgUrl}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
            <Text>
                Manufactured on : {MnufacturedOn}
            </Text>
            <Text>
                Pack of : {ProductQty}
            </Text>
            <Text>
                MRP : {ProductCost}
            </Text>
            </CardItem>
          </Card>
        </Content>
      
      );
    }
}