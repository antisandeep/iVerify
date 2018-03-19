import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import CustomContainer from '../components/CustomContainer';
import Button from '../components/Button';
import Label from '../components/Label';
import styles from '../components/CustomStyleSheet';



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { Username: 'GUEST' }
    }

    _handlePress(event) {
        alert('Login Successful with: ' + this.state.Username);
    }
    render() {
        return (

            <Container>
                <Header />
                <Content>
                  <Icon name='home' />
                  <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                </Content>
                <ScrollView style={styles.scroll}>
                      
                      {/* <Container>
                        <Image 
                        Source={require('/imgages/appicon.png')}
                        />
                    </Container>   */}
                    <CustomContainer>
                        <Label text="Username or Email" />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(Username)=>this.setState({Username})}
                        />
                    </CustomContainer>
                    <CustomContainer>
                        <Label text="Password" />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                        />
                    </CustomContainer>
                     <CustomContainer>
                        <Button
                            label="Login"
                            styles={{ button: styles.alignRight, label: styles.label }}
                            onPress={this._handlePress.bind(this)} />
                    </CustomContainer> 
                </ScrollView>
            </Container>
            
        );
    }
}


