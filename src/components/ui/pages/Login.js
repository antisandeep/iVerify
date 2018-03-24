import React, { Component } from 'react';
import { StyleSheet, Alert, Keyboard } from 'react-native'
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
    Toast,
    Spinner
} from "native-base";
import styles from '../common/CustomStyleSheet';
import Images from '@assets/images'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this._onpressLogin = this._onpressLogin.bind(this);
        this.state = {
            showToast: false,
            uname: '',
            passwrd: ''
        }

    }
    _onpressLogin() {
        const { navigate } = this.props.navigation;
        var { uname, passwrd } = this.state
        Keyboard.dismiss();
        var self = this
        this.props.doLogin(uname, passwrd, function(success, failure){
            if (success) {
                navigate('Landing');
                self.setState({ passwrd: '' , uname: '' });

            } else {
                Toast.show({
                    text: failure,
                    position: 'bottom',
                    buttonText: 'Error',
                    type: "danger"
                })
            }
      
        })
 

          
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content padder style={{ margin: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end', marginTop: 20 }}>
                        <Text style={styles.logoText}> iVerify</Text>
                        <Thumbnail source={Images.appLogo} style={styles._logo} />
                    </View>
                    <Form style={styles.loginForm}>
                        <Item>
                            <Icon active name="person" />
                            <Input placeholder="Username" 
                                value={this.state.uname}
                                autoCapitalize={'none'}
                                onChangeText={(uname) => this.setState({uname})} />
                        </Item>
                        <Item>
                            <Icon active name="lock" />
                            <Input placeholder=" Password" 
                                secureTextEntry={true} 
                                value={this.state.passwrd}
                                onChangeText={(passwrd) => this.setState({passwrd})}/>
                        </Item>
                    </Form>
                    <Button block success style={styles.loginButton} onPress={this._onpressLogin}>
                        <Text>Login</Text>
                    </Button>
                    {this.props.loading &&
                        <Spinner />
                    }
                </Content>
            </Container>
        );
    }
}

