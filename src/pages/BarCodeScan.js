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
  Body,
  Modal
} from "native-base"; 
import { RNCamera } from 'react-native-camera';

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
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}    
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
              onBarCodeRead={this._onBarCodeRead}
              autoFocus = {RNCamera.Constants.AutoFocus.on}
            /> 
        </Content>
      );
  }
}