import React, { Component } from 'react';
import { Image, Dimensions } from "react-native";
import styles from './../components/CustomStyleSheet'; 
import RenderCondition from './../components/RenderCondition';   

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
  Thumbnail  
} from "native-base"; 
import {Modal,TouchableHighlight,TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera'; 

const deviceWidth = Dimensions.get("window").width;
const ProductImg = require("./../images/don_Julio.jpg");
const award = require("./../images/award.png");

 
export default class BarCodeScan extends Component {
 
 constructor(props) {
    super(props);   
    this._onpressScan = this._onpressScan.bind(this);  
    this._onBarCodeRead = this._onBarCodeRead.bind(this);     
    this._navigateToReward = this._navigateToReward.bind(this); 
    this._natigateToProductInfo = this._natigateToProductInfo.bind(this); 
  }
  
state = {
    modalVisible: false,
    code: '',
    CodeScanned: true
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
      this.setState({CodeScanned:true});
  }
  _navigateToReward(){    
    const { navigate } = this.props.navigation;
    navigate('Reward');
  }
  _natigateToProductInfo(){    
    const { navigate } = this.props.navigation;    
    navigate('ProductInfo', { 
        ProductName: 'Don Julio' ,
        ProductImgUrl : {ProductImg},
        ProductQty : '1',
        ProductCost : 'INR 2500',
        IsGenuineProduct : 'true',
        MnufacturedOn: '01-01-15'
  });
}
  render(){
      return(   
        <Content padder key={this.state.code}>
            <TouchableHighlight  onPress={this._onpressScan}>
            <Card style={styles.ScanCodeTopMargin}>                
                <CardItem>
                    <Left>
                        <Icon active name="barcode" style={{ color: "#DD5044" }} />
                        <Text>Start Scan</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
            </TouchableHighlight>
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setModalVisible(false); }}> 
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
            </Modal>
            {RenderCondition(this.state.CodeScanned,
                <Card>
                    <CardItem bordered>
                    <Left>
                        <TouchableOpacity onPress={this._navigateToReward}>  
                            <Thumbnail source={award} />
                        </TouchableOpacity>
                        <Body>
                        <Text>Don Julio</Text>
                        <Text note>{this.state.code}</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image
                            style={{
                                alignSelf: "center",
                                height: 200,
                                resizeMode: "cover",
                                width: deviceWidth / 3,
                                marginVertical: 5
                            }}
                            source={ProductImg}
                            />
                            <Text>
                                Manufactured on : 01/01/15
                            </Text>
                            <Text>
                                Pack of : 1
                            </Text>
                            <Text>
                                MRP : INR 2500
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{ paddingVertical: 0 }}>
                        <Left>                              
                             <Button small onPress={this._natigateToProductInfo}>                                 
                                <Text>More Info</Text>
                            </Button> 
                        </Left>                     
                        <Right>
                            <Button small>                                 
                                <Text>Retailer Info</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
             )} 
        </Content>
      );
  }
}