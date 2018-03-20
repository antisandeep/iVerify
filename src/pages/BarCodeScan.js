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
import {Modal,TouchableHighlight} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class BarCodeScan extends Component {
 constructor(props) {
    super(props);   
    this._onpressScan = this._onpressScan.bind(this);  
    this._onBarCodeRead = this._onBarCodeRead.bind(this);     
  }
state = {
    modalVisible: false,
    code: ''
  }; 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
_onpressScan (){     
    this.setModalVisible(true);          
  }
  _onBarCodeRead = function(e) { 
      this.setModalVisible(false); 
      this.setState({code : e.data});
  }
  render(){
      return(          
        <Content padder>
            
            <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style = {styles.ScanPreview}    
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onBarCodeRead={this._onBarCodeRead}
            autoFocus = {RNCamera.Constants.AutoFocus.on}
            />  
            
            <Text style={{margin:10, fontSize: 30}} key={this.state.code} > 
               <Icon name="barcode" style={{ color: "#DD5044" }} />  {this.state.code}
            </Text>  
        </Content>
      );
  }
}