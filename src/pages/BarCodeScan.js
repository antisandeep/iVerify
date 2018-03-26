import React, { Component } from 'react';
import { Image, Dimensions,Platform } from "react-native"; 

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
  Thumbnail ,
  View 
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
    this._natigateToRetailerInfo = this._natigateToRetailerInfo.bind(this); 
    this._hideModal = this._hideModal.bind(this); 
    this._turnFlashOn = this._turnFlashOn.bind(this); 
  }
  
state = {
    modalVisible: false,
    code: '',
    CodeScanned: false,
    isTorchOn : false
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
_hideModal(){ 
    this.setModalVisible(false);
}
_turnFlashOn(){    
    if(this.state.isTorchOn){
        this.setState({isTorchOn:false});
    }else{
        this.setState({isTorchOn:true});
    }
    
}

_natigateToRetailerInfo(){
    const { navigate } = this.props.navigation;
    navigate('RetailerInformation');
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
                <View style = {styles.overlay}>
                    <Button iconLeft light transparent onPress={this._hideModal}>
                        <Icon active name="arrow-back" />               
                    </Button>                    
                </View>
                {/* <View style={styles.overlay1}>
                    <Button iconRight light transparent onPress={this._turnFlashOn}>
                        <Icon active name="bulb" />               
                    </Button>
                </View> */}
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
                    <Button block success onPress={this._natigateToProductInfo} style={{ margin: 10}}>                                 
                        <Text>More Information</Text>
                    </Button>                    
                    <Button block success style={{ margin: 10}} onPress={this._natigateToRetailerInfo}>                                 
                        <Text>Retailer Information</Text>
                    </Button> 
                </Card>
             )} 
        </Content>
      );
  }
}