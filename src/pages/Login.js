import React, { Component } from 'react';
import { StyleSheet,Alert,Keyboard } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  Text,
  Thumbnail,
  View,
  Toast
} from "native-base";
import styles from './../components/CustomStyleSheet'; 

const logo = require("./../images/logo.png");
export default class Login extends Component {
    constructor(props) {
        super(props);    
      this._onpressLogin = this._onpressLogin.bind(this); 
      this.state={
        showToast: false,
        uname: '',
        passwrd: ''
      } 
           
  }
 _onpressLogin() {   
    const { navigate } = this.props.navigation;
    var _uname = this.state.uname; 
    var _pwd = this.state.passwrd; 
    
    Keyboard.dismiss();     
    if(_uname == 'Diageo' && _pwd == 'Diageo123'){ 
        this.setState({passwrd : ''});   
        this.setState({uname : ''});      
        navigate('MainActivity');
    }else{
        Toast.show({
            text: 'Invalid Username or Password',
            position: 'bottom',
            buttonText: 'Error',
            type: "danger" 
        })
    }
  }
      render() {
        return (
            <Container style={styles.container}>                
                <Content padder style={{ margin: 40 }}>                      
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end', marginTop : 20 }}>
                        <Text style={styles.logoText}> iVerify</Text>
                        <Thumbnail source={logo} style={styles._logo} />                        
                    </View>
                    <Form style={styles.loginForm}>  
                        <Item>
                            <Icon active name="person" />
                            <Input placeholder="Username" onChangeText={(uname) => this.setState({uname})}
                            value = {this.state.uname}
                            />
                        </Item>
                        <Item>
                            <Icon active name="lock" />
                            <Input placeholder="Password" secureTextEntry = {true} 
                            onChangeText={(passwrd) => this.setState({passwrd})}
                            value = {this.state.passwrd}
                            />                        
                        </Item>                     
                    </Form>
                    <Button block success style={styles.loginButton} onPress={this._onpressLogin}>
                        <Text>Login</Text>                    
                    </Button>
                </Content>
            </Container>
        );
  }
}
 
