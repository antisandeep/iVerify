import React, { Component } from "react";
import { StyleSheet, Image,Dimensions } from "react-native";
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
const award = require("./../images/award.png");


export default class History extends Component{
    render(){
      return(
        <Content padder>
          <Card>
            <CardItem>
              <Left>                
                  <Thumbnail source={award} />                
                <Body>
                  <Text style={{ fontSize: 25,fontWeight:'bold'}}>Don Julio</Text> 
                </Body>
              </Left>
            </CardItem> 
            <CardItem>
            <Body>
              <Text>
                  Manufactured on : 01-01-15
              </Text>            
              <Text>
                  Pack of : 1
              </Text>             
              <Text>
                  MRP : INR 2500
              </Text>
            </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>                
                  <Thumbnail source={award} />                
                <Body>
                  <Text style={{ fontSize: 25,fontWeight:'bold'}}>johnny walker</Text> 
                </Body>
              </Left>
            </CardItem> 
            <CardItem>
            <Body>
              <Text>
                  Manufactured on : 01-01-18
              </Text>            
              <Text>
                  Pack of : 1
              </Text>             
              <Text>
                  MRP : INR 4500
              </Text>
            </Body>
            </CardItem>
          </Card>

        </Content>
      );
    }
}