import React, {Component} from 'react'; 
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Button,
  Text,
  TouchableHighlight,
  Modal
} from 'react-native'; 
import { RNCamera } from 'react-native-camera';
import { StackNavigator } from 'react-navigation'; 

export default class Form extends Component {
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
  render() {
    return ( 
      <View style={{marginTop: 30}}>    
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
           this.setModalVisible(false); 
          }}> 
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}      
              style = {styles.preview}          
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
              onBarCodeRead={this._onBarCodeRead}
              autoFocus = {RNCamera.Constants.AutoFocus.on}
            /> 
           
        </Modal>     
        <Button
            onPress={this._onpressScan}
            title="Scan Code"
        />       
        <Text style={{padding: 10, margin:30, fontSize: 30}} key={this.state.code} > 
          Your Code is : {this.state.code}
        </Text>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF' 
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'  
  }
});