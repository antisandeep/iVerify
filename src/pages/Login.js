import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
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
  View
} from "native-base";
import styles from './../components/CustomStyleSheet'; 

const logo = require("./../images/logo.png");
export default class Login extends Component {
//  _handlePress() {
//     console.log('Pressed!');
//   },
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
                        <Input placeholder="Username" />
                    </Item>
                    <Item>
                        <Icon active name="lock" />
                        <Input placeholder=" Password" secureTextEntry = {true} />                        
                    </Item>                     
                </Form>
                <Button block success style={styles.loginButton}/* onPress={this._handlePress.bind}*/>
                    <Text>Login</Text>
                    
                </Button>
                </Content>
            </Container>
        );
  }
}
 
