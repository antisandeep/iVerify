import React, { Component } from 'react';
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
  Left,
  Right,
  Body
} from "native-base"; 

export default class BarCodeScan extends Component {
 constructor(props) {
    super(props);      
  }
  render(){
      return(
        <Content padder>
            <Card style={styles.ScanCodeTopMargin}>                
                <CardItem>
                    <Left>
                        <Icon active name="camera" style={{ color: "#DD5044" }} />
                        <Text>Scan Code</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
        </Content>
      );
  }
}